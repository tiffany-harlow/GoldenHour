import { NativeTabs } from 'expo-router/native-tabs';

 export default function TabLayout() {
  return (
    <NativeTabs
    //Color Change of the current tab user is on
      tintColor="#ba8615"
      > 
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          md="home"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about">
        <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'info', selected: 'info.fill' }}
          md="info"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}