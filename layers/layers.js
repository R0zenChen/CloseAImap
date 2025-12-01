var wms_layers = [];

var format___0 = new ol.format.GeoJSON();
var features___0 = format___0.readFeatures(json___0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___0.addFeatures(features___0);
var lyr___0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___0, 
                style: style___0,
                popuplayertitle: '中国_省',
                interactive: true,
    title: '中国_省<br />\
    <img src="styles/legend/__0_0.png" /> -99<br />\
    <img src="styles/legend/__0_1.png" /> 93<br />\
    <img src="styles/legend/__0_2.png" /> 281<br />\
    <img src="styles/legend/__0_3.png" /> 298<br />\
    <img src="styles/legend/__0_4.png" /> 593<br />\
    <img src="styles/legend/__0_5.png" /> 741<br />\
    <img src="styles/legend/__0_6.png" /> 770<br />\
    <img src="styles/legend/__0_7.png" /> 840<br />\
    <img src="styles/legend/__0_8.png" /> 878<br />\
    <img src="styles/legend/__0_9.png" /> 1173<br />\
    <img src="styles/legend/__0_10.png" /> 1446<br />\
    <img src="styles/legend/__0_11.png" /> 1673<br />\
    <img src="styles/legend/__0_12.png" /> 1723<br />\
    <img src="styles/legend/__0_13.png" /> 1724<br />\
    <img src="styles/legend/__0_14.png" /> 1729<br />\
    <img src="styles/legend/__0_15.png" /> 1731<br />\
    <img src="styles/legend/__0_16.png" /> 1788<br />\
    <img src="styles/legend/__0_17.png" /> 2175<br />\
    <img src="styles/legend/__0_18.png" /> 3006<br />\
    <img src="styles/legend/__0_19.png" /> 4013<br />\
    <img src="styles/legend/__0_20.png" /> 4624<br />\
    <img src="styles/legend/__0_21.png" /> 4779<br />\
    <img src="styles/legend/__0_22.png" /> 4944<br />\
    <img src="styles/legend/__0_23.png" /> 5398<br />\
    <img src="styles/legend/__0_24.png" /> 5510<br />\
    <img src="styles/legend/__0_25.png" /> 6199<br />\
    <img src="styles/legend/__0_26.png" /> 6505<br />\
    <img src="styles/legend/__0_27.png" /> 7033<br />\
    <img src="styles/legend/__0_28.png" /> 7119<br />\
    <img src="styles/legend/__0_29.png" /> 8655<br />\
    <img src="styles/legend/__0_30.png" /> 9952<br />\
    <img src="styles/legend/__0_31.png" /> 24017<br />\
    <img src="styles/legend/__0_32.png" /> <br />' });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: '中国_省',
                interactive: false,
                title: '<img src="styles/legend/__1.png" /> 中国_省'
            });

lyr___0.setVisible(true);lyr___1.setVisible(true);
var layersList = [lyr___0,lyr___1];
lyr___0.set('fieldAliases', {'name': 'name', 'gb': 'gb', 'Company': 'Company', });
lyr___1.set('fieldAliases', {'name': 'name', 'gb': 'gb', });
lyr___0.set('fieldImages', {'name': 'TextEdit', 'gb': 'TextEdit', 'Company': 'Range', });
lyr___1.set('fieldImages', {'name': '', 'gb': '', });
lyr___0.set('fieldLabels', {'name': 'no label', 'gb': 'hidden field', 'Company': 'no label', });
lyr___1.set('fieldLabels', {'name': 'no label', 'gb': 'no label', });
lyr___1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});