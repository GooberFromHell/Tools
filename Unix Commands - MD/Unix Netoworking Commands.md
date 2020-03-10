### Unix Netoworking Commands

!!! error DO NOT FORGET!
**EDIT ALL FILES TO PERSIST NETWORK CHANGES**
- /etc/hostname
- /etc/hosts
- /etc/sysconfig/network-scripts/profiles/defaults
- /etc/sysconfig/network-scripts/route-<interface-name>
- any other non-standard network configuration files on the system.
!!!

```Shell
// NOTE: You can use 'ss' or 'ip' commands too.
// Change IP address

ifconfig <InterfaceName> down
ifconfig <InterfaceName> <NetIpaddress> netmask <Netmask> up

// Change MAC Address
ifconifg <InterfaceName> down
ifconifg <InterfaceName> hw ether <NewMacAddress> 
ifconifg <InterfaceName> up

//DHCP
dhclient <InterfaceName>
dhclient -r <InterfaceName>

// Change hostname
hostname <NewHostName>

// Modify Static Routes
route add default gw <NewDefaultGatewayIP>
route add -net <NetworkIP> netmask <Netmask> gw <InterfaceIP>
route del -net <NetworkIP> netmask <Netmask> gw <InterfaceIP>

// Add Static ARP Entry
arp -s <IpAssicatedToMAC>  <MACToAdd>

// Add MAC Address to interface
nano /etc/sysconfig/network-scripts/ifcfg-<InterfaceName>
MACADDR = <NewMacAddress>
```


