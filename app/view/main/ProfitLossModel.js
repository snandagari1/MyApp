Ext.define('MyApp.view.main.ProfitLossModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.profitloss',

    requires: [
        'MyApp.model.MetaProfitloss',
        'MyApp.model.FullProfitloss'
    ],

    stores: {
        metaProfitLoss: {
            model: 'MyApp.model.MetaProfitloss',
            autoLoad: true,

            listeners: {
                load: 'onMetaDataLoad'
            },

            proxy: {
                type: 'ajax',
                url: 'resources/data/meta_data.json',

                reader: {
                    type: 'json'
                }
            }
        }
    }
});
