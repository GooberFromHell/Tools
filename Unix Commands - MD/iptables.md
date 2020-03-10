### iptables

#### Add rule to table (Not  == \! before the option)
```Shell
iptables -t [TABLE] -A [CHAIN][RULES] -j [TARGET]
```

#### View rules (omit <TableName for default fileter table)
```Shell
iptables -L -n -t <TableName> --line-numbers -L (Optional: <ChainName>)
```

#### Delete a rule
```Shell
iptables -t <TableName> -D <ChainName> <LineNumber>
```

#### look for statefull firewalls on the network.
```Shell
tcpdump -s0 -nn net <TargetsNetwork> & nmap -sA -Pn <TargetIP/Network> -p <PortsIfNeeded> && kill %
```

#### Set default policy (default table is the filter table)
```Shell
iptables -P <Chain> -t <Table>
```


iptables -t filter -F (Flush all rules from the filter table)
iptables -t nat -F (Flush all rules from the NAT table)
iptables -X (Remove all user-defined chains from the filter table)
iptables -P INPUT ACCEPT (Set the default policy on the INPUT chain of the filter table)
iptables -P OUTPUT ACCEPT (Set the default policy on the OUTPUT chain of the filter table)
iptables -P FORWARD ACCEPT (Set the default policy on the FORWARD chain of the filter table)