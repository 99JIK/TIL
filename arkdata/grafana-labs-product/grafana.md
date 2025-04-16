---
description: Grafana에 관한 문서이다.
---

# Grafana

## Grafana <a href="#grafana-grafana" id="grafana-grafana"></a>

* 시계열 매트릭 데이터를 시각화하는 대시보드를 제공해주는 오픈소스 툴킷이다.
* 다양한 DB를 연결해 DB의 데이터로 간단히 시각화가 가능하다.
* Server Resource의 매트릭 정보나 Log같은 데이터를 시각화하기 위해 주로 쓰인다.
* 특정 수치에 트리거를 걸어 알림을 전달받는 기능도 제공한다.
* 대시보드를 import해서 사용하거나 커스터마이징 할 수 있다.

## Install Grafana <a href="#grafana-installgrafana" id="grafana-installgrafana"></a>

### Enterprise <a href="#grafana-enterprise" id="grafana-enterprise"></a>

* 기본 및 권장 에디션으로 나뉜다.
* OSS 에디션의 모든 기능이 포함되어 있다.

{% tabs %}
{% tab title="Ubuntu & Debian" %}
```bash
sudo apt-get install -y adduser libfontconfig1
wget https://dl.grafana.com/enterprise/release/grafana-enterprise_9.3.1_amd64.deb
sudo dpkg -i grafana-enterprise_9.3.1_amd64.deb
```
{% endtab %}

{% tab title="Standalone Linux Binaries" %}
```bash
wget https://dl.grafana.com/enterprise/release/grafana-enterprise-9.3.1.linux-amd64.tar.gz
tar -zxvf grafana-enterprise-9.3.1.linux-amd64.tar.gz
```
{% endtab %}

{% tab title="RedHat, CentOS, RHEL, Fedora" %}
```bash
wget https://dl.grafana.com/enterprise/release/grafana-enterprise-9.3.1-1.x86_64.rpm
sudo yum install grafana-enterprise-9.3.1-1.x86_64.rpm
```
{% endtab %}

{% tab title="OpenSUSE & SUSE" %}
```bash
wget https://dl.grafana.com/enterprise/release/grafana-enterprise-9.3.1-1.x86_64.rpm
sudo rpm -i --nodeps grafana-enterprise-9.3.1-1.x86_64.rpm
```
{% endtab %}
{% endtabs %}

#### Ubuntu & Debian

#### Standalone Linux Binaries

#### RedHat, CentOS, RHEL, Fedora

#### OpenSUSE & SUSE <a href="#grafana-opensuse-and-suse" id="grafana-opensuse-and-suse"></a>

### OSS <a href="#grafana-oss" id="grafana-oss"></a>

{% tabs %}
{% tab title="Ubuntu & Debian" %}
```bash
sudo apt-get install -y adduser libfontconfig1
wget https://dl.grafana.com/oss/release/grafana_9.3.1_amd64.deb
sudo dpkg -i grafana_9.3.1_amd64.deb
```
{% endtab %}

{% tab title="Standoalone Linux Binaries" %}
```bash
wget https://dl.grafana.com/oss/release/grafana-9.3.1.linux-amd64.tar.gz
tar -zxvf grafana-9.3.1.linux-amd64.tar.gz
```
{% endtab %}

{% tab title="RedHat, CentOS, RHEL, Fedora" %}
```bash
wget https://dl.grafana.com/oss/release/grafana-9.3.1-1.x86_64.rpm
sudo yum install grafana-9.3.1-1.x86_64.rpm
```
{% endtab %}

{% tab title="OpenSUSE & SUSE" %}
```bash
wget https://dl.grafana.com/oss/release/grafana-9.3.1-1.x86_64.rpm
sudo rpm -i --nodeps grafana-9.3.1-1.x86_64.rpm
```
{% endtab %}
{% endtabs %}

## Run Grafana

```bash
# 새로운 Daemon Reload
sudo systemctl daemon-reload
 
# Grafana-server 시작
sudo systemctl start grafana-server
 
# Grafana-server가 잘 시작되는지 확인
sudo systemctl status grafana-server
 
# 부팅 후 자동 실행 설정
sudo systemctl enable grafana-server.service
```

<figure><img src="../../.gitbook/assets/image (132).png" alt=""><figcaption><p>Grafana</p></figcaption></figure>
