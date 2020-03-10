#### Stop a service and remove it from boot startup.
```Shell
svcadm disable svc:<PathToServiceExecuable>
```

#### TEMPORARALLY - Stop a service and remove it from boot startup.
```Shell
svcadm disable  -t svc:<PathToServiceExecuable>
```

#### Changes to milestone.
```Shell
svcadm milestone multi-user
```

