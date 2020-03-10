#### Change interface IP address
```Shell
ifconfig <INTERFACENAME> down
```
```Shell
ifconfig <INTERFACENAME> <IPADDRESS> netmask <NETMASK> up
```

#### Change Interface MAC Address
```Shell
ifconfig <InterfaceName> down
```
```Shell
ifconfig <InterfaceName> eth <MACAddress>
```
```Shell
ifconfig up
```

#### start DHCO on an interface.
```Shell
ifconfig <InterfaceName> dhcp start
```
```Shell
ifconfig <InterfaceName> dhcp release
```
