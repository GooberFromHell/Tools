### dump2fs


#### Display filesystem device information.
```Shell
dumpe2fs /dev/<Partition/Volume>
```

#### Display partition or volume Superblock information.
```Shell
dumpe2fs -h /dev/<Partition/Volume> | sort | more
```