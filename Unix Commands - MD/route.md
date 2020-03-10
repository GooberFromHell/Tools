### route



#### SMF
#### Add default route
```Shell
route add default <IPAddress>
```
		
#### Remove default route 
```Shell
routel delete default <IPAddress>
```
		
#### Add route
```Shell
route add <RoutedNetwork>/<Netmask> <GatewayToTake>
```
		
#### Delete rout
```Shell
route delete <RoutedNetwork>/<Netmask> <GatewayToTake>
```
		
#### Lunix Systems
#### Add default route
```Shell
route add default gw <IPAddress>
```
		
#### Remove default route 
```Shell
routel del default <IPAddress>
```
		
#### Add route
```Shell
route add -net <RoutedNetwork> netmask <Netmask255Form> gw <GatewayToTake>
```
		
#### Delete rout
```Shell
route del -net <RoutedNetwork> netmask <Netmask255Form>
```

#### Change default gateway.
```Shell
route add default <NewDefaultGatewayIP>
```
```Shell
route delete default <OldDefaultGatewayIP>
```

#### Add static route.
```Shell
route add <Network/CIDR> <InterfaceIP>
```

#### Delete static route.
```Shell
route delete <Network/CIDR> <InterfaceIP>
```