# SGTaxiHeatMap
Visualize LTA's Taxi Availability Data with a heat map



## Setup
You will need to set up 2 API keys.

1. `taxi_script.js` 
   You will need to replace the tile source with your own. If you are not familiar with this, I recommend following this guide: http://leafletjs.com/examples/quick-start.html
2. `update_heat.py`
   You will need to replace the API key field with your own which can be obtained from https://developers.data.gov.sg/

If you have set up the above correctly, `update_heat.py` updates the file `taxi_output.json` for reading by taxi_script.js.
I recommend running `update_heat.py` once a minute. If you're on OSX or any UNIX system, a good way to start is by using [cron jobs](http://code.tutsplus.com/tutorials/scheduling-tasks-with-cron-jobs--net-8800).
