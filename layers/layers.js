var wms_layers = [];

var format_1000_0 = new ol.format.GeoJSON();
var features_1000_0 = format_1000_0.readFeatures(json_1000_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1000_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1000_0.addFeatures(features_1000_0);
var lyr_1000_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1000_0, 
                style: style_1000_0,
                popuplayertitle: 'Обеспеченность легковыми автомобилями населения (авто на 1000 человек) на 1999 год',
                interactive: true,
    title: 'Обеспеченность легковыми автомобилями населения (авто на 1000 человек) на 1999 год<br />\
    <img src="styles/legend/1000_0_0.png" /> 50 - 74<br />\
    <img src="styles/legend/1000_0_1.png" /> 74 - 99<br />\
    <img src="styles/legend/1000_0_2.png" /> 99 - 124<br />\
    <img src="styles/legend/1000_0_3.png" /> 124 - 149<br />\
    <img src="styles/legend/1000_0_4.png" /> 149 - 205<br />'
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Реки',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> Реки'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Гидрография',
                interactive: true,
    title: 'Гидрография<br />\
    <img src="styles/legend/_2_0.png" /> Прочие гидрографические объекты<br />\
    <img src="styles/legend/_2_1.png" /> Болота<br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Дорожная сеть',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> Дорожная сеть'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
cluster__4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__4
});
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:cluster__4, 
                style: style__4,
                popuplayertitle: 'Населенные пункты',
                interactive: true,
    title: 'Населенные пункты<br />\
    <img src="styles/legend/_4_0.png" /> 0 - 10000 чел.<br />\
    <img src="styles/legend/_4_1.png" /> 10000 - 30000 чел.<br />\
    <img src="styles/legend/_4_2.png" /> 30000 - 60000 чел.<br />\
    <img src="styles/legend/_4_3.png" /> 60000 - 1000000 чел.<br />\
    <img src="styles/legend/_4_4.png" /> 1000000 - 1633853 чел.<br />'
        });

lyr_1000_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_1000_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr_1000_0.set('fieldAliases', {'Назва': 'Назва', 'Число': 'Число', '1994': '1994', '1999': '1999', 'число': 'число', });
lyr__1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'Тип': 'Тип', 'Название': 'Название', 'Площадь': 'Площадь', });
lyr__3.set('fieldAliases', {'Назва': 'Назва', });
lyr__4.set('fieldAliases', {'Тип': 'Тип', 'Насел': 'Насел', 'Назв.': 'Назв.', });
lyr_1000_0.set('fieldImages', {'Назва': 'TextEdit', 'Число': 'TextEdit', '1994': 'TextEdit', '1999': 'TextEdit', 'число': 'Range', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'Тип': 'TextEdit', 'Название': 'TextEdit', 'Площадь': 'TextEdit', });
lyr__3.set('fieldImages', {'Назва': '', });
lyr__4.set('fieldImages', {'Тип': 'TextEdit', 'Насел': 'TextEdit', 'Назв.': 'TextEdit', });
lyr_1000_0.set('fieldLabels', {'Назва': 'hidden field', 'Число': 'hidden field', '1994': 'inline label - always visible', '1999': 'inline label - always visible', 'число': 'no label', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'hidden field', 'Тип': 'hidden field', 'Название': 'inline label - always visible', 'Площадь': 'hidden field', });
lyr__3.set('fieldLabels', {'Назва': 'hidden field', });
lyr__4.set('fieldLabels', {'Тип': 'hidden field', 'Насел': 'inline label - always visible', 'Назв.': 'inline label - always visible', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});