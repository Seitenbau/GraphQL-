import { OnInit, OnChanges, OnDestroy, SimpleChanges, EventEmitter } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
import { ObjectEvent } from 'ol';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
export declare class ViewComponent implements OnInit, OnChanges, OnDestroy {
    private host;
    instance: View;
    componentType: string;
    constrainRotation: boolean | number;
    enableRotation: boolean;
    extent: Extent;
    maxResolution: number;
    minResolution: number;
    maxZoom: number;
    minZoom: number;
    resolution: number;
    resolutions: number[];
    rotation: number;
    zoom: number;
    zoomFactor: number;
    center: Coordinate;
    projection: string;
    zoomAnimation: boolean;
    onChangeZoom: EventEmitter<ObjectEvent>;
    onChangeResolution: EventEmitter<ObjectEvent>;
    onChangeCenter: EventEmitter<ObjectEvent>;
    constructor(host: MapComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
