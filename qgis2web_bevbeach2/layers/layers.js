var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_trails_0 = new ol.format.GeoJSON();
var features_trails_0 = format_trails_0.readFeatures(json_trails_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trails_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_trails_0.addFeatures(features_trails_0);var lyr_trails_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trails_0, 
                style: style_trails_0,
                title: '<img src="styles/legend/trails_0.png" /> trails'
            });var format_Parks_1 = new ol.format.GeoJSON();
var features_Parks_1 = format_Parks_1.readFeatures(json_Parks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Parks_1.addFeatures(features_Parks_1);var lyr_Parks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parks_1, 
                style: style_Parks_1,
                title: '<img src="styles/legend/Parks_1.png" /> Parks'
            });var format_paths_2 = new ol.format.GeoJSON();
var features_paths_2 = format_paths_2.readFeatures(json_paths_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paths_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_paths_2.addFeatures(features_paths_2);var lyr_paths_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paths_2, 
                style: style_paths_2,
                title: '<img src="styles/legend/paths_2.png" /> paths'
            });var format_parcels_Bev_Beach2_3 = new ol.format.GeoJSON();
var features_parcels_Bev_Beach2_3 = format_parcels_Bev_Beach2_3.readFeatures(json_parcels_Bev_Beach2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcels_Bev_Beach2_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_parcels_Bev_Beach2_3.addFeatures(features_parcels_Bev_Beach2_3);var lyr_parcels_Bev_Beach2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcels_Bev_Beach2_3, 
                style: style_parcels_Bev_Beach2_3,
                title: '<img src="styles/legend/parcels_Bev_Beach2_3.png" /> parcels_Bev_Beach2'
            });

lyr_trails_0.setVisible(true);lyr_Parks_1.setVisible(true);lyr_paths_2.setVisible(true);lyr_parcels_Bev_Beach2_3.setVisible(true);
var layersList = [baseLayer,lyr_trails_0,lyr_Parks_1,lyr_paths_2,lyr_parcels_Bev_Beach2_3];
lyr_trails_0.set('fieldAliases', {'LENGTH_FT': 'LENGTH_FT', 'LENGTH_MI': 'LENGTH_MI', 'TRAIL': 'TRAIL', 'STATUS': 'STATUS', 'NAME': 'NAME', });
lyr_Parks_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TAX_MAP': 'TAX_MAP', 'Tax_Parcel': 'Tax_Parcel', 'PROP_TYPE': 'PROP_TYPE', 'ACREAGE': 'ACREAGE', 'NAME': 'NAME', 'PARK_TYPE': 'PARK_TYPE', 'LANDUSE': 'LANDUSE', 'ACQU_METH': 'ACQU_METH', 'BASEMAP': 'BASEMAP', });
lyr_paths_2.set('fieldAliases', {'FEAT_CODE': 'FEAT_CODE', 'SURFACE': 'SURFACE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_parcels_Bev_Beach2_3.set('fieldAliases', {'PIN': 'PIN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_trails_0.set('fieldImages', {'LENGTH_FT': 'TextEdit', 'LENGTH_MI': 'TextEdit', 'TRAIL': 'TextEdit', 'STATUS': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Parks_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TAX_MAP': 'TextEdit', 'Tax_Parcel': 'TextEdit', 'PROP_TYPE': 'TextEdit', 'ACREAGE': 'TextEdit', 'NAME': 'TextEdit', 'PARK_TYPE': 'TextEdit', 'LANDUSE': 'TextEdit', 'ACQU_METH': 'TextEdit', 'BASEMAP': 'TextEdit', });
lyr_paths_2.set('fieldImages', {'FEAT_CODE': 'TextEdit', 'SURFACE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_parcels_Bev_Beach2_3.set('fieldImages', {'PIN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_trails_0.set('fieldLabels', {'LENGTH_FT': 'no label', 'LENGTH_MI': 'no label', 'TRAIL': 'no label', 'STATUS': 'no label', 'NAME': 'no label', });
lyr_Parks_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TAX_MAP': 'no label', 'Tax_Parcel': 'no label', 'PROP_TYPE': 'no label', 'ACREAGE': 'no label', 'NAME': 'no label', 'PARK_TYPE': 'no label', 'LANDUSE': 'no label', 'ACQU_METH': 'no label', 'BASEMAP': 'no label', });
lyr_paths_2.set('fieldLabels', {'FEAT_CODE': 'no label', 'SURFACE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_parcels_Bev_Beach2_3.set('fieldLabels', {'PIN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_parcels_Bev_Beach2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});