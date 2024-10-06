import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const CovidMap = ({ data }) => {
    const center = [10.1632, 76.6413]; 
    const getColor = (type) => {
        switch (type) {
            case 'active':
                return 'orange';
            case 'cured':
                return 'green'; 
            case 'deaths':
                return 'red'; 
            default:
                return 'gray'; 
        }
    };

    return (
        <div style={{ height: '600px', width: '100%', marginBottom: '30px', marginTop: '20px' }}>
            <MapContainer center={center} zoom={5} style={{ height: '100%', width: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data?.map((stateData, index) => (
                    <>
                        <CircleMarker
                            key={`active-${index}`}
                            center={stateData?.coordinates}
                            radius={Math.log(stateData?.active + 1) * 3}
                            fillOpacity={0.5}
                            color={getColor('active')}
                        >
                            <Popup>
                                <div>
                                    <h4>{stateData?.state}</h4>
                                    <p><strong>Active Cases:</strong> {stateData?.active}</p>
                                </div>
                            </Popup>
                        </CircleMarker>
                        <CircleMarker
                            key={`cured-${index}`}
                            center={stateData?.coordinates}
                            radius={Math.log(stateData?.cured + 1) * 3}
                            fillOpacity={0.5}
                            color={getColor('cured')}
                        >
                            <Popup>
                                <div>
                                    <h4>{stateData.state}</h4>
                                    <p><strong>Cured:</strong> {stateData?.cured}</p>
                                </div>
                            </Popup>
                        </CircleMarker>
                        <CircleMarker
                            key={`deaths-${index}`}
                            center={stateData?.coordinates}
                            radius={Math.log(stateData?.deaths + 1) * 3} 
                            fillOpacity={0.5}
                            color={getColor('deaths')}
                        >
                            <Popup>
                                <div>
                                    <h4>{stateData.state}</h4>
                                    <p><strong>Deaths:</strong> {stateData?.deaths}</p>
                                </div>
                            </Popup>
                        </CircleMarker>
                    </>
                ))}
            </MapContainer>
        </div>
    );
};

export default CovidMap;
