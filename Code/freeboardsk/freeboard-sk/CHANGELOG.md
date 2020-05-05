# CHANGELOG: Freeboard

### v1.8.5

- **Update**: `navigation.anchor` delta messages (maxRadius, raise / lower) not being processed.

- **Update**: Destination point / active route point info display. 

- **Fix**: Context menu on touch devices not getting correct location.

### v1.8.4

- **Update**: Support node server fix to correct `aton` delta context (corrected from `atons`).

- **Update**: Support node server implementation of `apps/list`.


### v1.8.3

- **Fix**: Issue where navigation data (bearing, DTG, etc to destination) was not being updated.


### v1.8.2

- **Change**: Created Routes (Draw or from GPX import) no longer create Waypoint records for first and last route coordinates. `start` and `end` attributes are set to `null`.

- **Change**: Normalise coordinates (between -180 and 180) for map actions to cater for map wrapping. 

- **Fix**: Cursor position display showing values <-180 and >180

- **Fix**: Moving a waypoint would set it as the active destination regardless of whether it was set or not.


### v1.8.1

- **Fixed:** When adding a waypoint it was not "selected" for display when a PENDING 202 response is received.

- **Fixed:** Route, Note and Chart list display issue where a long name would
cause the "selection checkbox" not to be displayed.

- **Fixed:** Map button rendering issues in iOS.

- **Fixed:** Issue where OS dark mode was not always being detected correctly.


### v1.8.0
- **Added:** Display `Aids to Navigation` _(AtoN)_ on map. Show AtoN properties. 

- **Added:** Center `Note` or `Waypoint` on map from list display. 

- **Added:** Ability to mark WebApps as favourites and switch between them in the `Instrument Panel`. 

- **Added:** Experimental support for `GRIB2JSON` formatted resources at the path `./resources/grib`.
_(Requires `freeboard-sk-helper` plugin)_

- **Update:** OpenLayers 5.

### v1.7.0
- **Added:** Alternate color scheme (`Dark mode`) configuration setting with options to use either the: 
    1) Device OS setting via the `prefers-color-scheme` css media attribute
    2) Signal K `environment.mode` value.  

- **Added:** `Fullscreen` mode support. _(Note: only available if app is not embedded in another web page / app.)_

- **Added:** Configuration to select `preferred Signal K paths` to use for
vessel `heading`, `True Wind speed` and `direction` from the available paths.

- **Added:** Configuration to specify parameters to the Instrument Panel App. These are appended to url as a query string.


### v1.6.0
- **Added:** `Context menu` when you right click on map with `Navigate to here`,  
`Add Waypoint here`, `Add Note here` and `Measure` options.

- **Added:** Enable / support map keyboard control.

- **Update:** Added `wind.speedOverGround` as a TWS source. 

- **Added:** Initial support for Picture in Picture from video stream for compatible browsers.

- **Fixed:** Display format of `ETA` in vessel information dialog. 

- **Fixed:** Vessel name of `self` not being displayed in vessel popup.


### v1.5.2

- **Fixed:** Display of `callsign` and `destination` in vessel information dialog. 


### v1.5.1

- **Update:** Added `Last Updated` time back to vessel popup. 

- **Update:** Vessel `Info` dialog displays additonal information e.g. Dimensions, Port, Flag, etc.


### v1.5.0

- **Update:** Updated to Angular 8.

- **Update:** Moved Signal K stream processing to Web Worker.

- **Added:** Display `Closest Approach` notifications and show vessel on map 
_(for node server requires signalk-derived-data plugin v 1.23.0 or greater)_.

- **Added:** Display notifications sent from `signalk-buddylist-plugin`. 


### v1.4.1

- **Fixed:** AIS vessel icon orientation when only COG is available.

- **Added:** Clicking on acknowledged alarm opens Alarms screen.

- **Feature:** Initial support for selecting any vessel as the `active` vessel.

_Note: Setting the focus on another vessel will direct all PUT requests destined to a `signalk/v1/api/vessels/` path to the selected vessel. Actions may fail if the server does not support PUT's to these paths._


### v1.4.0

- **Added:** View / add `Notes`.

- **Added:** Create `Regions` and add notes to a region.

- **Added:** Move `Waypoint` and `Note` position as well as modifying `Route` and `Region` vertices. 

_Note: `MultiPolygon` regions are displayed on the map but are not currently supported for modification._

- **Added:** Setting to halt the selected Instrument App when the panel is hidden. This allows
resources to be freed when instruments are not being displayed. Instrument App is re-started 
each time the panel is opened.

- **Deprecated:** Option to use delta updates as a means of submitting resource changes.

- **Fix:** Disable `Add Waypoint at Vessel` menu item when no vessel position is available.

- **Fix:** Disable `Delete` button of Active Route in Route List.

- **Fix:** Orientation of vessel display when only COG value (no HEADING value) is present.


### v1.3.2

- **Update:** Update to `signalk-client-angular` v1.5.1


### v1.3.1

- **Fix:** Issue where measured distance was not using Great Circle calculation. (Closes #69)

- **Fix:** Issue where AIS target heading was not displayed correctly in popover.


### v1.3.0

- **Added:** Raise M.O.B., Sinking, Piracy, Fire, etc. alarms.
- **Enhancement:** Alarm display will now `minimize` acknowledged alarms until the alarm is cleared.
- **Enhancement:** Add ability to choose the miimum zoom level at which `Other Vessels` wind vector is displayed.
- **Change:** Changed the `Preferred Heading` configuration setting to be `Use True / Magnetic Values`. The selection made in this setting will cause Freeboard to use the chosen Signal K (path where a value has both a True and / or Magnetic path) e.g. `environment.windDirectionTrue`,  `environment.windDirectionMagnetic`. 

_Note: If the selected path is not available in the data stream NO value is shown!_

### v1.2.1

- **Fix:** Issue where wind values for AIS targets was not received.
- **Fix:** Display alignment of AIS targets and wind vectors when map is zoomed
- **Fix:** Add default name for vessels in vessels list with no name or mmsi data


### v1.2.0

- **Enhancement:** In Playback mode display timestamp of received data.
- **Added:** Filter display of `Other Vessels`. Select the specific vessels you want to appear on the map.
- **Enhancement:** Display `wind vector` of `Other Vessels` at high zoom levels (>14) when data is available for the vessel. Displayed vector can be either `True` or `Apparent` wind value, this is configured in `Settings` screen.

### v1.1.0

- **Added:** Initial support for History and Playback APIs
- **Added:** Display Navigation data from `navigation.courseGreatCircle.nextPoint` when available
- **Added:** `Navigate To`: Select waypoint as course destination
- Display `Prev / Next` point buttons to cycle through points of `Active Route`
- **Added:** Login / Authentication: Initial support.
- **Enhancement:** Added `Zoom In / Out` buttons to map display
- **Fix:** Heading, TWD and AWA vessel lines to have consistant appearance at all scales
- **Fix**: Bearing line is now displayed only when course destination point data is available
- **Fix:** TWD & AWA lines not updated when SOG=0

### v1.0.2

- **Fix:** platform checks that were causing MS Edge to throw an exception.

### v1.0.1

- **Fix:** Url used to retrieve app list from non-node servers to include api version number.

### v1.0.0

- Port to Angular framework.
- Align operation across both NodeJS and Artemis Signal K server implementations
- Integrate instrumentation via Apps installed on Signal K server


#### Notes:

Freeboard requires that the Signal K server host is able to service requests to specific api paths to support application operation.

**Resources:**

To be able to create, edit or delete Routes and Waypoints the Signal K server will need to action:

1. HTTP PUT requests to the `/reources/routes` or `/resources/waypoints` paths suitable reource provider  OR
2. Delta updates targeting the `/reources/routes` or `/resources/waypoints` paths.

Errors will be display where HTTP PUT requests to the server fail.

If using delta updates, no failure message will be displayed but Route and Waypoint lists will not reflect the intended changes, as these lists are populated by data returned by the server.

**Anchor Watch:**

To be able to set an anchor alarm the Signal K server will need to action HTTP PUT requests to the foloowing paths:
1. `/signalk/v1/api/vessels/self/navigation/anchor/maxRadius` 
2. `/signalk/v1/api/vessels/self/navigation/anchor/position` 

*If notification messages are received for the path `notifications.navigation.anchor` an alarm message will be displayed on the screen regardless of where the alarm was configured.*

**Active Route / Navigate To:**

To be able to set the Active Route or target Waypoint Signal K server will need to action HTTP PUT requests to the foloowing paths:
1. `/signalk/v1/api/vessels/self/navigation/courseGreatCircle/nextPoint.position` 
2. `/signalk/v1/api/vessels/self/navigation/courseGreatCircle/activeRoute.href` 
3. `/signalk/v1/api/vessels/self/navigation/courseGreatCircle/activeRoute.startTime` 
