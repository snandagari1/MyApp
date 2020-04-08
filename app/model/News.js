Ext.define('MyApp.model.News', {
    extend: 'MyApp.model.Base',

    fields: [
        'type',
        { name: 'date', type: 'date', dateFormat: 'Y-m-d H:i:s' },
        'time',
        'author',
        'group',
        'image',
        'title',
        'paragraph'
    ]
});
