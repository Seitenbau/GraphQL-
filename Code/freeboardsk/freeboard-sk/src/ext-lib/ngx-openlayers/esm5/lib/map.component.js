/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import Map from 'ol/Map';
var MapComponent = /** @class */ (function () {
    function MapComponent(host) {
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
        this.onClick = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onMoveEnd = new EventEmitter();
        this.onPointerDrag = new EventEmitter();
        this.onPointerMove = new EventEmitter();
        this.onPostCompose = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreCompose = new EventEmitter();
        this.onPropertyChange = new EventEmitter();
        this.onSingleClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onClick.emit(event); }));
        this.instance.on('dblclick', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onDblClick.emit(event); }));
        this.instance.on('moveend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onMoveEnd.emit(event); }));
        this.instance.on('pointerdrag', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPointerDrag.emit(event); }));
        this.instance.on('pointermove', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPointerMove.emit(event); }));
        this.instance.on('postcompose', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPostCompose.emit(event); }));
        this.instance.on('postrender', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPostRender.emit(event); }));
        this.instance.on('precompose', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPreCompose.emit(event); }));
        this.instance.on('propertychange', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onPropertyChange.emit(event); }));
        this.instance.on('singleclick', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.onSingleClick.emit(event); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    /**
     * @return {?}
     */
    MapComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.instance.updateSize();
    };
    MapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aol-map',
                    template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    MapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MapComponent.propDecorators = {
        width: [{ type: Input }],
        height: [{ type: Input }],
        pixelRatio: [{ type: Input }],
        keyboardEventTarget: [{ type: Input }],
        loadTilesWhileAnimating: [{ type: Input }],
        loadTilesWhileInteracting: [{ type: Input }],
        logo: [{ type: Input }],
        renderer: [{ type: Input }],
        onClick: [{ type: Output }],
        onDblClick: [{ type: Output }],
        onMoveEnd: [{ type: Output }],
        onPointerDrag: [{ type: Output }],
        onPointerMove: [{ type: Output }],
        onPostCompose: [{ type: Output }],
        onPostRender: [{ type: Output }],
        onPreCompose: [{ type: Output }],
        onPropertyChange: [{ type: Output }],
        onSingleClick: [{ type: Output }]
    };
    return MapComponent;
}());
export { MapComponent };
if (false) {
    /** @type {?} */
    MapComponent.prototype.instance;
    /** @type {?} */
    MapComponent.prototype.componentType;
    /** @type {?} */
    MapComponent.prototype.width;
    /** @type {?} */
    MapComponent.prototype.height;
    /** @type {?} */
    MapComponent.prototype.pixelRatio;
    /** @type {?} */
    MapComponent.prototype.keyboardEventTarget;
    /** @type {?} */
    MapComponent.prototype.loadTilesWhileAnimating;
    /** @type {?} */
    MapComponent.prototype.loadTilesWhileInteracting;
    /** @type {?} */
    MapComponent.prototype.logo;
    /** @type {?} */
    MapComponent.prototype.renderer;
    /** @type {?} */
    MapComponent.prototype.onClick;
    /** @type {?} */
    MapComponent.prototype.onDblClick;
    /** @type {?} */
    MapComponent.prototype.onMoveEnd;
    /** @type {?} */
    MapComponent.prototype.onPointerDrag;
    /** @type {?} */
    MapComponent.prototype.onPointerMove;
    /** @type {?} */
    MapComponent.prototype.onPostCompose;
    /** @type {?} */
    MapComponent.prototype.onPostRender;
    /** @type {?} */
    MapComponent.prototype.onPreCompose;
    /** @type {?} */
    MapComponent.prototype.onPropertyChange;
    /** @type {?} */
    MapComponent.prototype.onSingleClick;
    /** @type {?} */
    MapComponent.prototype.controls;
    /** @type {?} */
    MapComponent.prototype.interactions;
    /**
     * @type {?}
     * @private
     */
    MapComponent.prototype.host;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQztBQVF6QjtJQXFERSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTVDN0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVmLFdBQU0sR0FBRyxNQUFNLENBQUM7O1FBb0NoQixhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFD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LG9GQUFvRjtRQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELHNDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLHdHQUdUO2lCQUNGOzs7O2dCQXRCQyxVQUFVOzs7d0JBMkJULEtBQUs7eUJBRUwsS0FBSzs2QkFFTCxLQUFLO3NDQUVMLEtBQUs7MENBRUwsS0FBSzs0Q0FFTCxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSzswQkFHTCxNQUFNOzZCQUVOLE1BQU07NEJBRU4sTUFBTTtnQ0FFTixNQUFNO2dDQUVOLE1BQU07Z0NBRU4sTUFBTTsrQkFFTixNQUFNOytCQUVOLE1BQU07bUNBRU4sTUFBTTtnQ0FFTixNQUFNOztJQXFEVCxtQkFBQztDQUFBLEFBbkdELElBbUdDO1NBNUZZLFlBQVk7OztJQUN2QixnQ0FBcUI7O0lBQ3JCLHFDQUE2Qjs7SUFFN0IsNkJBQ2U7O0lBQ2YsOEJBQ2dCOztJQUNoQixrQ0FDbUI7O0lBQ25CLDJDQUNzQzs7SUFDdEMsK0NBQ2lDOztJQUNqQyxpREFDbUM7O0lBQ25DLDRCQUN1Qjs7SUFDdkIsZ0NBQzZCOztJQUU3QiwrQkFDdUM7O0lBQ3ZDLGtDQUMwQzs7SUFDMUMsaUNBQ2tDOztJQUNsQyxxQ0FDNkM7O0lBQzdDLHFDQUM2Qzs7SUFDN0MscUNBQ3lDOztJQUN6QyxvQ0FDcUM7O0lBQ3JDLG9DQUN3Qzs7SUFDeEMsd0NBQzRDOztJQUM1QyxxQ0FDNkM7O0lBRzdDLGdDQUF5Qjs7SUFDekIsb0NBQWlDOzs7OztJQUVyQiw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlclZpZXdJbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xuaW1wb3J0IE1hcEV2ZW50IGZyb20gJ29sL01hcEV2ZW50JztcbmltcG9ydCBPYmplY3RFdmVudCBmcm9tICdvbC9PYmplY3QnO1xuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJ29sL3JlbmRlci9FdmVudCc7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLW1hcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiPjwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgaW5zdGFuY2U6IE1hcDtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnbWFwJztcblxuICBASW5wdXQoKVxuICB3aWR0aCA9ICcxMDAlJztcbiAgQElucHV0KClcbiAgaGVpZ2h0ID0gJzEwMCUnO1xuICBASW5wdXQoKVxuICBwaXhlbFJhdGlvOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGtleWJvYXJkRXZlbnRUYXJnZXQ6IEVsZW1lbnQgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxvYWRUaWxlc1doaWxlQW5pbWF0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2FkVGlsZXNXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2dvOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoKVxuICByZW5kZXJlcjogJ2NhbnZhcycgfCAnd2ViZ2wnO1xuXG4gIEBPdXRwdXQoKVxuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9uRGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25Nb3ZlRW5kOiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25Qb2ludGVyRHJhZzogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvblBvaW50ZXJNb3ZlOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9uUG9zdENvbXBvc2U6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvblByZUNvbXBvc2U6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvblByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25TaW5nbGVDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG5cbiAgLy8gd2UgcGFzcyBlbXB0eSBhcnJheXMgdG8gbm90IGdldCBkZWZhdWx0IGNvbnRyb2xzL2ludGVyYWN0aW9ucyBiZWNhdXNlIHdlIGhhdmUgb3VyIG93biBkaXJlY3RpdmVzXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5vbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gICAgdGhpcy5vbkRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gICAgdGhpcy5vbk1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMub25Qb2ludGVyRHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMub25Qb2ludGVyTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMub25Qb3N0Q29tcG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XG4gICAgdGhpcy5vblBvc3RSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMub25QcmVDb21wb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD4oKTtcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICAgIHRoaXMub25TaW5nbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLk1hcCBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWFwKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGFyZ2V0KHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLm9uQ2xpY2suZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25EYmxDbGljay5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW92ZWVuZCcsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMub25Nb3ZlRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb2ludGVyZHJhZycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLm9uUG9pbnRlckRyYWcuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJtb3ZlJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub25Qb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdGNvbXBvc2UnLCAoZXZlbnQ6IFJlbmRlckV2ZW50KSA9PiB0aGlzLm9uUG9zdENvbXBvc2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3RyZW5kZXInLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm9uUG9zdFJlbmRlci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJlY29tcG9zZScsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25QcmVDb21wb3NlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMub25Qcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2luZ2xlY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vblNpbmdsZUNsaWNrLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbWFwLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlU2l6ZSgpO1xuICB9XG59XG4iXX0=