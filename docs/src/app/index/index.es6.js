'use strict';

import _ from 'lodash';
import m from 'mithril';
import marked from 'marked';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import headerPanel from 'polythene/header-panel/header-panel';
import card from 'polythene/card/card';
import button from 'polythene/button/button';

require('polythene-theme/theme');
require('app/app.css!');

let app,
    navItem,
    createDrawer,
    main,
    links,
    linkMap,
    defaultTitle,
    baseUrl;

defaultTitle = 'Polythene Documentation';

links = [{
    label: null,
    links: [{
        url: 'polythene',
        name: 'Introduction',
        title: defaultTitle,
        demo: 'index'
    }, {
        url: 'theme',
        name: 'Appearance / Theming',
        demo: null
    }]
}, {
    label: 'Combined components',
    links: [{
        url: 'header-panel',
        name: 'Header Panel'
    }, {
        url: 'toolbar',
        name: 'Toolbar'
    }, {
        url: 'list',
        name: 'List'
    }, {
        url: 'dialog',
        name: 'Dialog'
    }]
}, {
    label: 'Components',
    links: [{
        url: 'card',
        name: 'Card'
    }, {
        url: 'tabs',
        name: 'Tabs'
    }, {
        url: 'button',
        name: 'Button'
    }, {
        url: 'icon-button',
        name: 'Icon Button'
    }, {
        url: 'fab',
        name: 'Floating Action Button'
    }, {
        url: 'item',
        name: 'Item'
    }, {
        url: 'list-tile',
        name: 'List Tile'
    }]
}, {
    label: 'Elementary components',
    links: [{
        url: 'svg',
        name: 'SVG'
    }, {
        url: 'icon',
        name: 'Icon'
    }, {
        url: 'ripple',
        name: 'Ripple'
    }, {
        url: 'shadow',
        name: 'Shadow'
    }, {
        url: 'element',
        name: 'Element',
        demo: null
    }, {
        url: 'font-roboto',
        name: 'Roboto Font'
    }, {
        url: 'layout',
        name: 'Layout',
        demo: null
    }]
}];

linkMap = {};
_.forEach(_.flatten(_.pluck(links, 'links')), function(link) {
    linkMap[link.url] = link;
});

baseUrl = links[0].links[0].url;

navItem = function(title, url, highlight) {
    return m.component(listTile, {
        title: title,
        url: {
            href: url,
            config: m.route
        },
        class: highlight ? 'highlight' : ''
    });
};

createDrawer = function() {
    var highlight;
    return m('.drawer.dark-theme',
        m.component(headerPanel, {
            header: {
                toolbar: {
                    topBar: m('.title', 'Polythene')
                }
            },
            mode: 'waterfall',
            fixed: true,
            content: [
                links.map(function(group) {
                    return m.component(list, {
                        header: group.label ? {
                            title: group.label
                        } : null,
                        tiles: group.links.map(function(link) {
                            highlight = (m.route() === link.url);
                            return navItem(link.name, link.url, highlight);
                        })
                    });
                }),
                m('.footer', m.trust('Polythene by Arthur Clemens 2015. Project page on <a href="https://github.com/ArthurClemens/Polythene">Github</a>.')) // Logo icon design by <a href="https://thenounproject.com/acider/">Miguel C Balandrano</a>
            ]
        })
    );
};

main = function(currentLinkData, content) {
    var title, id, parsed, url, urlId, demoCard, demoCardSubtitle = null;
    title = currentLinkData.name;
    id = currentLinkData.url;
    parsed = content ? marked(content) : '';

    if (currentLinkData.demo !== null) {
        urlId = currentLinkData.demo || id;
        url = {
            href: 'http://arthurclemens.github.io/Polythene-Examples/' + urlId + '.html',
            target: '_blank'
        };
        demoCardSubtitle = (id === 'polythene') ? 'All components' : title;
        demoCard = m.component(card, {
            url: url,
            content: [{
                primary: {
                    title: 'Demo',
                    subtitle: demoCardSubtitle
                }
            }, {
                actions: {
                    class: 'bordered',
                    content: [
                        m('.flex'),
                        m.component(button, {
                            label: 'View',
                            url: url
                        })
                    ]
                }
            }]
        });
    }

    return m('.main.flex',
        m.component(headerPanel, {
            header: {
                toolbar: {
                    topBar: m('.title', title)
                }
            },
            mode: 'waterfall',
            fixed: true,
            content: m('.doc-content', [
                demoCard,
                m.trust(parsed)
            ])
        })
    );
};

app = {};

app.vm = function() {
    return {
        init: function() {
            app.vm.currentLink = function() {
                return linkMap[m.route.param('module')];
            };

            app.vm.updateHead = function() {
                var currentLink, title;
                currentLink = app.vm.currentLink() || {};
                title = currentLink.title || (currentLink.name + ' - ' + defaultTitle);
                document.title = title;
            };
        }
    };
}.call();

app.controller = function() {
    var docs;
    app.vm.init();
    docs = m.request({
        method: 'GET',
        url: 'app/docs/' + m.route.param('module') + '.md',
        background: false,
        deserialize: function(value) {
            return value;
        }
    });

    return {
        docs: docs
    };
};

app.view = function(ctrl) {
    var docData, currentLink;
    docData = ctrl.docs();
    currentLink = app.vm.currentLink();
    return [
        m('.scaffold.layout.horizontal.reverse', {
            config: app.vm.updateHead
        }, [
            main(currentLink, docData),
            createDrawer()
        ])
    ];
};

m.route.mode = 'hash';
m.route(document.body, baseUrl, {
    ':module': app
});
