
/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useRef } from 'react';
import { FormGroup, Checkbox } from 'react-bootstrap';
import BaseMap from '@mapstore/framework/components/map/BaseMap';
import mapType from '@mapstore/framework/components/map/enhancers/mapType';
import Message from '@mapstore/framework/components/I18N/Message';
import {
    boundsToExtentString,
    getFeatureFromExtent
} from '@js/utils/CoordinatesUtils';
import ZoomTo from '@js/components/ZoomTo';

const Map = mapType(BaseMap);
Map.displayName = 'Map';

function FilterByExtent({
    id,
    extent,
    projection,
    onChange,
    vectorLayerStyle,
    layers
}) {

    const enabled = !!extent;
    const [currentExtent, setCurrentExtent] = useState();
    const countInitialMapMoveEnd = useRef(0);

    function handleOnSwitch(event) {
        onChange({
            extent: event.target.checked
                ? currentExtent
                : undefined
        });
    }

    function handleOnMapViewChanges(center, zoom, bbox) {
        const { bounds, crs } = bbox;
        const newExtent = boundsToExtentString(bounds, crs);
        // map triggers two move end event on mount
        if (countInitialMapMoveEnd.current < 2) {
            countInitialMapMoveEnd.current += 1;
        } else if (enabled) {
            onChange({
                extent: newExtent
            });
        }
        setCurrentExtent(newExtent);
    }

    return (
        <FormGroup
            key={id + '-extent'}
            controlId={id + '-extent'}
            className="gn-filter-by-extent"
        >
            <Checkbox
                checked={enabled}
                type="switch"
                id="gn-filter-by-extent-switch"
                onChange={handleOnSwitch}
            >
                <Message msgId="gnhome.extent"/>
            </Checkbox>
            <div
                className="gn-filter-by-extent-map"
                style={{
                    height: 300,
                    opacity: enabled ? 1 : 0.4,
                    pointerEvents: enabled ? 'auto' : 'none',
                    position: 'relative'
                }}
            >

                <Map
                    id="gn-filter-by-extent-map"
                    mapType="openlayers"
                    map={{
                        registerHooks: false,
                        projection
                    }}
                    styleMap={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                    }}
                    eventHandlers={{
                        onMapViewChanges: handleOnMapViewChanges
                    }}
                    layers={[
                        ...(layers ? layers : []),
                        ...(extent
                            ? [{
                                id: 'highlight',
                                type: 'vector',
                                features: [getFeatureFromExtent(extent)],
                                style: vectorLayerStyle
                                    ? { ...vectorLayerStyle,  weight: 0.001 }
                                    : {
                                        color: '#00a653',
                                        opacity: 0.8,
                                        fillColor: '#00a653',
                                        fillOpacity: 0.4,
                                        weight: 0.001
                                    }
                            }]
                            : []
                        )
                    ]}
                >
                    <ZoomTo extent={extent} />
                </Map>
            </div>
        </FormGroup>
    );
}

FilterByExtent.defaultProps = {
    projection: 'EPSG:3857'
};

export default FilterByExtent;
