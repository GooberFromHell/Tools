### Unix Master Boot Record

#### Writes to the Master Boot Record on the boot device.
```Shell
echo -n L | dd of=/boot/grub/stage1 bs=1 seek=<OFFSET> conv=notrunc
```

#### Compare Boot directory files to the MBR.
```Shell
dd if=/dev/sda bs=512 count=1 | diff - /boot/grub/stage<StageNumber>
```