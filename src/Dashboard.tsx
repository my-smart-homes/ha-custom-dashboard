import { Column, Group, ButtonCard, Row, TimeCard, WeatherCard, SensorCard, CameraCard, PersonCard } from '@hakit/components';

function Dashboard() {
  return (
    <Column fullWidth>
      <Row fullWidth>
  <Group title="Home Overview" >
    
    <TimeCard lg={12} md={12} xlg={12} center />

    <WeatherCard
      entity="weather.forecast_home"
      forecastRows={1}
      forecastType="daily"
      lg={6}
      md={6}
      xlg={6}
    />
    <ButtonCard entity="person.bulent" hideToggle hideLastUpdated lg={6} md={6} xlg={6}  layoutType="slim-vertical"   description="Go to Dashboard"
       onClick={() => window.open('https://home-rcabbfaihby7unxtlpwj-6fcea9a5.msh.srvmysmarthomes.us', '_blank')}
    />
    <ButtonCard 
      entity="sensor.front_door_battery"
      lg={6}
      md={6}
      xlg={6}
    />

    <ButtonCard
      entity="switch.front_door_motion_detection_2"
      service="toggle"
      lg={6}
      md={6}
      xlg={6}
    />


  </Group>
</Row>

      <Row fullWidth>
        <Group title="Lights">
          <ButtonCard
            entity="light.dinner_table"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
          <ButtonCard
            entity="light.hallway"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
          <ButtonCard
            entity="light.kasa_smart_dimmer"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
        </Group>
      </Row>

      <Row fullWidth>
        <Group title="Smart Plugs">
          <ButtonCard
            entity="switch.tp_link_smart_plug_4174"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
          <ButtonCard
            entity="switch.tp_link_smart_plug_4174_main_bedroom_1"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
          <ButtonCard
            entity="switch.tp_link_smart_plug_4174_main_bedroom_2"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
        </Group>
      </Row>

      <Row fullWidth>
        <Group title="Media">
          <ButtonCard
            entity="media_player.samsung_ev_tv"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
          <ButtonCard
            entity="media_player.xboxone"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
        </Group>
      </Row>

      <Row fullWidth>
        <Group title="Sensors">
          <SensorCard
            entity="sensor.iphone_battery_level_2"
            lg={4}
            md={4}
            xlg={4}
          />
          <SensorCard
            entity="sensor.rmx2195_battery_level"
            lg={4}
            md={4}
            xlg={4}
          />
          <SensorCard
            entity="sensor.front_door_battery_2"
            lg={4}
            md={4}
            xlg={4}
          />
        </Group>
      </Row>

      {/* <Row fullWidth>
        <Group title="Automations">
          <ButtonCard
            entity="automation.record_video_on_frontdoor_motion"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
          <ButtonCard
            entity="automation.ring_door_bell_automation"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          />
        </Group>
      </Row> */}
      <Row fullWidth>
        <Group title="Front Door">
          {/* <CameraCard
            entity="camera.front_door_live_view"
            lg={4}
            md={4}
            xlg={4}
          /> */}
          <ButtonCard
            entity="button.front_door_take_snapshot"
            service="press"
            lg={4}
            md={4}
            xlg={4}
          />
          {/* <SensorCard
            entity="sensor.front_door_battery"
            lg={4}
            md={4}
            xlg={4}
          /> */}
          <SensorCard
            entity="sensor.front_door_wireless"
            lg={4}
            md={4}
            xlg={4}
          />
          {/* <ButtonCard
            entity="switch.front_door_motion_detection_2"
            service="toggle"
            lg={4}
            md={4}
            xlg={4}
          /> */}
        </Group>
      </Row>
    </Column>
  );
}

export default Dashboard;