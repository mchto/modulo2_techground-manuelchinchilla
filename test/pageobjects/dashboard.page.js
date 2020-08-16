const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboarPage extends Page {
    /**
     * define selectors using getter methods
     */
    get noArticlesLabel () { return $('div=No articles are here... yet.') }
    get yourFeedTab () { return $('.nav-link=Your Feed')}
    get globalFeedTab () { return $('.nav-link=Global Feed')}
    //para un elemento singular se una $
    //para varios elementos se usa $$
    //get articlesRows () { return $$('//article-list/article-preview')};
    //selector usado concat
    get articlesRows () { return $('<article-list/>').$$('article-preview')};
    get readMoreAnchor () { return $('article-list').$$('article-preview')[1].$('span=Read more...')};

    getNoArticlesLabel() {
        return this.noArticlesLabel;
    }

    getYourFeedTab() {
        return this.yourFeedTab;
    }

    getGlobalFeedTab() {
        return this.globalFeedTab;
    }
    
    getArticlesList() {
        return this.articlesRows;
    }

    getReadMoreAnchor() {
        return this.readMoreAnchor;
    }
}

module.exports = new DashboarPage();