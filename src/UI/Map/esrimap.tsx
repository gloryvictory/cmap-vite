import MapView from 'esri/views/MapView';
import WebMap from 'esri/WebMap';
import Legend from 'esri/widgets/Legend';
import ScaleBar from 'esri/widgets/ScaleBar';
import { useState } from 'react';
// import { calcite-shell, calcite-shell-panel,  calcite-action-bar, calcite-action} from "@esri/calcite-components";

function ESRIMap() {
  // const [count, setCount] = useState(0)

  // esriConfig.apiKey = "YOUR_API_KEY";

  const webmap = new WebMap({
    portalItem: {
      id: '41281c51f9de45edaf1c8ed44bb10e30',
    },
  });

  const view = new MapView({
    container: 'viewDiv',
    map: webmap,
  });

  const scalebar = new ScaleBar({
    view: view,
  });

  view.ui.add(scalebar, 'bottom-left');

  const legend = new Legend({
    view: view,
  });
  view.ui.add(legend, 'top-right');

  return (
    <>
      <div className="ESRIMap">
        <h1> HELLO !!!</h1>
        {view}
      </div>
    </>
  );
}

export default ESRIMap;
