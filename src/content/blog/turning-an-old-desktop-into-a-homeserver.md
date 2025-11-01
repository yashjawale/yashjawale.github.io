---
title: Turning an old desktop into a Home Server
description: My first go at repurposing an old desktop to act as home server to self host a bunch of services
pubDate: 'Nov 01 2025'
coverImageCredit: Original picture by Taylor Vick on Unsplash
---

This post describes my first go at having a functional homeserver instance by repurposing my old desktop computer.

Note: This post doesn't describe the how-to part of the topic & instead explores my experience with it so far, which might help someone gauge their usecase. But I do share some useful resources at the end.

## Why tho?

I had this computer lying around from quite a while, earlier I used it for gaming (not AAA titles of course) but it never caught my fancy. Even before that, it served as my primary computer before I bought a laptop & even for satisfying my urge to distro hop in the past.
Rather than gathering dust & letting its compute power go to waste, I figured lets give homelabbing a try & explore what its all about.
(Early disclaimer to whoever wants to start: It's a rabbit hole & you can't escape it, RUN!)

But having services self hosted gives you another level of confidence for privacy & security of your data. While also giving you better performance for the services since your server only handles your services.

## The machine itself

The computer I'm using isn't the most powerful thing in the world but definitely enough for the job. It originally had a Pentium CPU inside but over the years had its motherboard & CPU upgraded. Its current general specs are:

- 2nd Gen Intel i3 4 core
- 12 GB DDR3 RAM
- A 256 GB SSD (For Proxmox)
- 2 x 500GB HDD in RAID 1 Configuration
- Another 250GB HDD that I haven't found a use for yet...
- Asus GeForce GT 640 (The CPU doesn't have an integrated GPU so this is what I used earlier in Desktop build, again current use case pending)

![Picture of my desktop under the table](../../assets/blogimages/turning-an-old-desktop-into-a-homeserver/cpu.jpg 'My humble little desktop')

## Software setup

The server runs Proxmox VE as its main operating system, with the services running in either VMs or LXCs depending upon the use case. Having the services virtualized helps in long term maintainence with no dependency conflicts to worry about.

The services I've setup yet are...

### OpenMediaVault

For setting up Network Attached Storage (NAS)

### Caddy

A reverse proxy so that other services can be accessed via a custom domain. It also handles generating Let's Encrypt SSL certficates via Cloudflare API

### Stirling PDF

A self hosted solution for PDF/Office file conversion needs

### Paperless NGX

Solution for holding all your scanned & digital documents in one place & auto tags them based on previous interactions. Currently my most loved service.

### Glance

A dashboard to view statuses of all VMs & LXCs at once

### Joplin Server

Self hosted syncing setup for Joplin clients. Although currently I'm also trying out Anytype that has peer-to-peer sync inbuilt. But I can self-host its backup server node.

### CUPS

For sharing printer to the network (Since my current printer has a hard time with Mac drivers, so this is a godsend)

### SANE

This is similar to CUPS but works for sharing scanners across the network, the [scanservejs](https://sbs20.github.io/scanservjs/) project also provides a very nice GUI for having your files scanned directly via browser.

## The Experience

For some reason, I love installing new operating systems, so installing Proxmox & experiencing it for the first time was a process I'll always enjoy.

Underneath Proxmox is based on Debian, so you have full freedom to install whatever you want (Although not recommended, please use VMs for that), this makes installing drivers a breeze since guides for Debian/Ubuntu are plentiful across the internet.

You also do learn a lot about networking while setting this all up, which I appreciate.

Hosting the services you use daily also adds a certain amount of flare to your workflow that you enjoy. (Although I wonder about the headache when something breaks 🫣, hopefully won't experience that)

For hosting the services themselves, you'll always thank [Proxmox VE Helper Scripts](https://community-scripts.github.io/ProxmoxVE/) project everytime you want to try out a new service quickly.

## Future Aspects

While the compute power I have is more than enough for my usecase, my current implementation leaves a lot to be desired.

I'm planning on moving most of the stack to use Docker instead of LXCs as that'll make having backups a lot easier.

Self hosting excalidraw is on my radar if it helps having multiple documents easier.

Power consumption is also something I'm worried about, currently it draws an average of 50 watts at any instant, if you're using newer hardware you can significantly reduce this footprint. (I've heard about some laptops consuming as low as just 5 watts during operation). But for me this'll mean buying new equipment which I don't plan on doing for a while...

People also have self hosted firewalls (this one needs at least to NICs on the server), other security services like CrowdSec & DNS level Ad Blocking with projects like PiHole on these which I might consider ahead depending upon circumstances.

These are some of the resources I highly recommend to get started yourself & to get more general information about the ~cult~ topic:

- [Proxmox Playlist on Learn Linux TV](https://youtube.com/playlist?list=PLT98CRl2KxKHnlbYhtABg6cF50bYa8Ulo&si=CgQoUhoC1wUy07er)
- [Jim's Garage Homelab Series](https://youtube.com/playlist?list=PLXHMZDvOn5sWluGp77smeOoLQmiwJ0IZL&si=sd3I-wlmpJXBKmv8)

<iframe src="https://www.youtube.com/embed/cMVcclMkp7g?si=AG_smmIK7Jyt7tM-" title="My New Found Addiction!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This video gave me a final push for homelabbing & since then I'm going deeper & deeper into this rabbit hole. But I'm enjoying the journey in all its glory & I'm excited for what's ahead to come 🙂

<style>
	/* CPU image */
	img[alt="Picture of my desktop under the table"] {
  	max-width: 480px;
	}
</style>
