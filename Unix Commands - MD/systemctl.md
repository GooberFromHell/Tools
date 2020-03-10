### systemctl

#### Display boot chain in Systemd
```Shell
systemd-analyze
```

#### List boot services
```Shell
systemctl list-unit-files --type service
```

#### Display total service enabled.
```Shell
systemctl list-unit-files -t service | grep enabled | wc -l
```

#### Display all Loaded and active units.
```Shell
systemctl list-units
```

#### Display all unit files that are on the system.
```Shell
systemctl list-unit-files
```

#### Enable systemd service at boot.
```Shell
systemctl enable <ServiceName>
```

#### list dependencies for unit
```Shell
systemctl list-dependencies <UnitName>
```

#### list units that are dependent on a unit.
```Shell
systemctl list-dependencies <UnitName> --reverse
```