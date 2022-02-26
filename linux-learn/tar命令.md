## 压缩
- tar -cvf jpg.tar *.jpg //将目录里所有jpg文件打包成tar.jpg 

- tar -czf jpg.tar.gz *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz

- tar -cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2

- tar -cZf jpg.tar.Z *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z

- rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for linux

- zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux

## 解压
- tar -xvf file.tar //解压 tar包

- tar -xzvf file.tar.gz //解压tar.gz

- tar -xjvf file.tar.bz2   //解压 tar.bz2

- tar -xZvf file.tar.Z   //解压tar.Z

- unrar e file.rar //解压rar

- unzip file.zip //解压zip