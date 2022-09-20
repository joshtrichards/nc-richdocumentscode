OC.L10N.register(
    "richdocumentscode",
    {
    "Built-in CODE Server" : "Eingebauter CODE-Server",
    "Collabora Online - Built-in CODE Server" : "Collabora Online - Eingebauter CODE-Server",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Eingebauter Collabora Online Development Edition (CODE)-Server für lokale Tests und nicht-produktive Nutzung",
    "This app has to be installed and used together with the **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** app.\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\nThis app provides a built-in server with all of the document editing features of Collabora Online. Easy to install, for personal use or for small teams. A bit slower than a standalone server and without the advanced scalability features.\n\nThe download is rather big so it is possible you experience a time-out when using the web interface. You can use the OCC command line tool to install the built-in server:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)" : "Diese App muss zusammen mit der **[Collabora Online](https://apps.nextcloud.com/apps/richdocuments)** App installiert und verwendet werden.\n\nCollabora Online ist eine leistungsstarke, auf LibreOffice basierende Online-Office-Suite mit kollaborativer Bearbeitung, die alle gängigen Dokumenten-, Tabellenkalkulations- und Präsentationsdateiformate unterstützt und mit allen modernen Browsern zusammenarbeitet.\n\nDiese App bietet einen integrierten Server mit allen Dokumentenbearbeitungsfunktionen von Collabora Online. Einfach zu installieren, für den persönlichen Gebrauch oder für kleine Teams. Etwas langsamer als ein eigenständiger Server und ohne die erweiterten Skalierbarkeitsfunktionen.\n\nDer Download ist ziemlich groß, so dass es möglich ist, dass du bei der Verwendung der Web-Schnittstelle eine Auszeit erlebst. Du kannst das OCC-Befehlszeilen-Tool verwenden, um den integrierten Server zu installieren:\n\n```\nsudo -u wwwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nWobei `wwwrun` der Benutzer deines Webservers ist. Dies ist ```www-data``` auf Debian, Ubuntu und Derivaten, `wwwrun` auf SUSE-basierten Distributionen, `apache` auf Red Hat/Fedora und `http` auf Arch-Linux und Derivaten.\n\nAktualisierungen können wie folgt durchgeführt werden:\n```\nsudo -u wwwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nNatürlich kannst du alternativ auch den Speicherverbrauch und die PHP-Time-Outs standardmäßig erhöhen, siehe die [Nextcloud-Dokumentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=phpmeout#configuring-your-web-server).",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Dein System ist ARM64, du hast jedoch die x86_64-Version der App installiert. Bitte entferne diese und",
    "install the correct version from the Nextcloud App Store." : "installiere die richtige Version aus dem Nextcloud App Store.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Dein System ist x86_64, du hast jedoch die ARM64-Version der App installiert. Bitte entferne diese und",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Du hast die Collabora Online-App aktiviert. Weitere Informationen und Konfiguration findest du unter:",
    "Settings > Administration > Collabora Online" : "Einstellungen > Administration > Collabora Online",
    "Built-in CODE server is designed to work with the usual Collabora Online app." : "Der eingebaute CODE-Server funktioniert mit der üblichen Collabora Online-App.",
    "Install it from the Nextcloud App Store." : "Installiere es aus dem App Store.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Es ist ein Fehler beim Prüfen der Installation deiner Collabora Online-App. Du kannst diesen Fehler melden\n                mit der Markierung:<em> richdocuments-EnabledCheckFailed</em>"
},
"nplurals=2; plural=(n != 1);");
