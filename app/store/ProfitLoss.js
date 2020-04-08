Ext.define('MyApp.store.ProfitLoss', {
    extend: 'Ext.data.Store',
    alias: 'store.profitloss',

    model: 'MyApp.model.FullProfitloss',

    proxy: {
        type: 'ajax',
        url: 'resources/data/full_data.json',
        reader: 'json'
    }
});
