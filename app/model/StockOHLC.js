Ext.define('MyApp.model.StockOHLC', {
    extend: 'MyApp.model.Base',

    fields: [
        'company',
        'time',
        'open',
        'high',
        'low',
        'close'
    ]
});
