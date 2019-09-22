import React from 'react'
import Helmet from 'react-helmet'

import Button from '../components/Button'

const AvisoLegal = props => {
  const { DIC } = props

  return (
    <section className='app-content pb2rem mb2rem'>
      <Helmet
        title={DIC.NAV_AVISO_LEGAL}
        meta={[
          { name: 'description', content: `${DIC.NAV_AVISO_LEGAL}` },
          { property: 'og:title', content: `${DIC.NAV_AVISO_LEGAL}` },
        ]}
      />
      <header>
        <h1 className='tit-header'>{DIC.AVISO_LEGAL_CONTENT}Datenschutzerklärung</h1>
      </header>
      <article className='app-column-center'>
        <p className='txt-left'>
1.	Einführung:<br />
Durch das Internets und die elektronischen Datenverarbeitung kann das Individuum das Gefühl bekomamen, den Überblick darüber zu verlieren, wo und zu welchem Zweck seine Daten gespeichert werden. Die sorgfältige und sichere Behandlung Ihrer Daten ist uns wichtig. Deshalb möchten wir Ihnen als Besucher unsere Homepage erläutern, wie der Hessenwaldschule Weiterstadt die Vertraulichkeit Ihrer personenbezogenen Daten sicherstellt und die Persönlichkeitsrechte respektiert.
<br />
2.	Aktualisierung der Datenschutzerklärung<br />
Wir behalten uns deshalb das Recht vor, die Erklärung nach Bedarf zu ändern oder zu ergänzen. Die Änderung werden wir an dieser Stelle veröffentlichen. 
<br />
3.	Name und Anschrift des für die Verarbeitung Verantwortlichen<br />
Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:
<br />
HESSENWALDSCHULE<br />
Wolfsgartenallee 8, <br />
64331 Weiterstadt<br />
Telefon: 06150 - 97460  <br />  
Fax: 06150 - 974621   <br /> 
Mail: hws_weiterstadt@schulen.ladadi.de <br />

4.	Erreichbarkeit in Datenschutzfragen:
Sie erreichen uns in datenschutzrechtlichen Fragen unter <br />

 Celia Cid Sánchez: c.cid@hws.schule<br />

5.	Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung

Beim Besuch der Website
Beim Aufrufen unserer Webseiten werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einer sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:<br />
i.	IP-Adresse des anfragenden Rechners,<br />
ii.	Datum und Uhrzeit des Zugriffs,<br />
iii.	Name und URL der abgerufenen Datei,<br />
iv.	Website, von der aus der Zugriff erfolgt (Referrer-URL),<br />
v.	verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.<br />
Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:<br />
vi.	Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,<br />
vii.	Gewährleistung einer komfortablen Nutzung unserer Website,<br />
viii.	Auswertung der Systemsicherheit und -stabilität sowie<br />
ix.	zu weiteren administrativen Zwecken.<br />
Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein. Nähere Erläuterungen dazu erhalten Sie unter den Ziff. 4 und 5 dieser Datenschutzerklärung.<br />
6.	Weitergabe von Daten<br />
Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.<br />
Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:<br />
a)	Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,<br />
b)	die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder <br />Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht,  dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben<br />
c)	für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie <br />
d)	dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.<br />
7.	Cookies<br />
Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.<br />
In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.<br />
Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht.<br />
Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.<br />
Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe Ziff. 5). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht.
Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.<br />
Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.<br />

8.	Analyse-Tools<br />
a.	Tracking-Tools<br />
Die im Folgenden aufgeführten und von uns eingesetzten Tracking-Maßnahmen werden auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt. Mit den zum Einsatz kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen.
Die jeweiligen Datenverarbeitungszwecke und Datenkategorien sind aus den entsprechenden Tracking-Tools zu entnehmen.<br />
b.	Google Analytics1<br />
Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden Optimierung unserer Seiten nutzen wir Google Analytics, ein Webanalysedienst der Google Inc. (https://www.google.de/intl/de/about/) (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; im Folgenden „Google“). In diesem Zusammenhang werden pseudonymisierte Nutzungsprofile erstellt und Cookies (siehe unter Ziff. 4) verwendet. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website wie
i.	Browser-Typ/-Version,<br />
ii.	verwendetes Betriebssystem,<br />
iii.	Referrer-URL (die zuvor besuchte Seite),<br />
iv.	Hostname des zugreifenden Rechners (IP-Adresse),<br />
v.	Uhrzeit der Serveranfrage,<br />
werden an einen Server von Google in den USA übertragen und dort gespeichert. Die Informationen werden verwendet, um die Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu Zwecken der Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten zu erbringen. Auch werden diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag verarbeiten. Es wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google zusammengeführt. Die IP-Adressen werden anonymisiert, so dass eine Zuordnung nicht möglich ist (IP-Masking).<br />
Sie können die Installation der Cookies durch eine entsprechende Einstellung der Browser-Software verhindern; wir weisen jedoch darauf hin, dass in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich genutzt werden können.<br />
Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie ein Browser-Add-on herunterladen und installieren (https://tools.google.com/dlpage/gaoptout?hl=de).<br />
Alternativ zum Browser-Add-on, insbesondere bei Browsern auf mobilen Endgeräten, können Sie die Erfassung durch Google Analytics zudem verhindern, indem Sie auf diesen Link klicken. Es wird ein Opt-out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten beim Besuch dieser Website verhindert. Der Opt-out-Cookie gilt nur in diesem Browser und nur für unsere Website und wird auf Ihrem Gerät abgelegt. Löschen Sie die Cookies in diesem Browser, müssen Sie das Opt-out-Cookie erneut setzen.<br />
Weitere Informationen zum Datenschutz im Zusammenhang mit Google Analytics finden Sie etwa in der Google Analytics-Hilfe (https://support.google.com/analytics/answer/6004245?hl=de).
c.	Google Adwords Conversion Tracking<br />
Um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unserer Website für Sie auszuwerten, nutzen wir ferner das Google Conversion Tracking. Dabei wird von Google Adwords ein Cookie (siehe Ziffer 4) auf Ihrem Rechner gesetzt, sofern Sie über eine Google-Anzeige auf unsere Webseite gelangt sind.<br />
Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Besucht der Nutzer bestimmte Seiten der Webseite des Adwords-Kunden und das Cookie ist noch nicht abgelaufen, können Google und der Kunde erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde.<br />
Jeder Adwords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Webseiten von Adwords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für Adwords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Adwords-Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.<br />
Wenn Sie nicht an dem Tracking-Verfahren teilnehmen möchten, können Sie auch das hierfür erforderliche Setzen eines Cookies ablehnen – etwa per Browser-Einstellung, die das automatische Setzen von Cookies generell deaktiviert. Sie können Cookies für Conversion-Tracking auch deaktivieren, indem Sie Ihren Browser so einstellen, dass Cookies von der Domain „www.googleadservices.com“ blockiert werden. Googles Datenschutzbelehrung zum Conversion-Tracking finden Sie hier (https://services.google.com/sitestats/de.html).<br />
d.	IP-Anonymisierung<br />
Wir nutzen die Funktion “Aktivierung der IP-Anonymisierung” auf dieser Webseite. Dadurch wird Ihre IPAdresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IPAdresse wird nicht mit anderen Daten von Google zusammengeführt.<br />
e.	Demografische Merkmale bei Google Analytics<br />
Diese Website nutzt die Funktion “demografische Merkmale” von Google Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im Punkt “Widerspruch gegen Datenerfassung” dargestellt generell untersagen.<br />
f.	Matomo<br />
Wir verwenden die Open-Source-Software Matomo zur Analyse und statistischen Auswertung der Nutzung der Website. Hierzu werden Cookies eingesetzt (siehe Ziffer 4). Die durch den Cookie erzeugten Informationen über die Websitenutzung werden an unsere Server übertragen und in pseudonymen Nutzungsprofilen zusammengefasst. Die Informationen werden verwendet, um die Nutzung der Website auszuwerten und um eine bedarfsgerechte Gestaltung unserer Website zu ermöglichen. Eine Weitergabe der Informationen an Dritte erfolgt nicht.<br />
Es wird in keinem Fall die IP-Adresse mit anderen den Nutzer betreffenden Daten in Verbindung gebracht. Die IP-Adressen werden anonymisiert, so dass eine Zuordnung nicht möglich ist (IP-Masking).
Ihr Besuch dieser Webseite wird aktuell von der Matomo Webanalyse erfasst. Klicken Sie hier (https://matamo.org/docs/privacy/), damit Ihr Besuch nicht mehr erfasst wird.<br />

9.	Speicherung der IP Adresse<br />
Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im Falle von Rechtsverletzungen wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.<br />

10.	SSL-Verschlüsselung   <br />
Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.<br />
11.	Betroffenenrechte<br />
Sie haben das Recht:<br />
a.	gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;<br />
b.	gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;<br />
c.	gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;<br />
d.	gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;<br />
e.	gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;<br />
f.	gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und<br />
g.	gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Firmensitzes wenden.<br />
Sie haben das das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Außerdem haben Sie das Recht diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DS-GVO oder Art. 9 Abs. 2 lit. a DS-GVO oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt.<br />
In Ausübung dieses Rechts haben Sie ferner das Recht zu erwirken, dass die Sie betreffenden personenbezogenen Daten direkt von einem Verantwortlichen einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Freiheiten und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt werden.<br />
Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung personenbezogener Daten, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.
12.	Widerspruchsrecht<br />
Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.<br />
Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an c.cid@hws.schule <br />
13.	Recht auf Beschwerde bei einer Aufsichtsbehörde<br />
Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DS-GVO verstößt. 
Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DS-GVO.<br />
14.	Rechtsgrundlage der Verarbeitung<br />
Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Artikel 6 Absatz 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.<br />
Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich sind, dient Artikel 6 Absatz 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.<br />
Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, denen unser Unternehmen unterliegt, dient Artikel 6 Absatz 1 lit. c DSGVO als Rechtsgrundlage.<br />
Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Artikel 6 Absatz 1 lit. d DSGVO als Rechtsgrundlage.<br />
Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Artikel 6 Absatz 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung. Das berechtige Interesse unseres Unternehmens liegt in der Durchführung unserer Geschäftstätigkeit.<br />
15.	Dauer der Speicherung personenbezogener Daten<br />
Personenbezogene Daten werden für die Dauer der jeweiligen gesetzlichen Aufbewahrungsfrist gespeichert. Nach Ablauf der Frist erfolgt eine routinemäßige Löschung der Daten, sofern nicht eine Erforderlichkeit für eine Vertragsanbahnung oder die Vertragserfüllung besteht.
16.	Datensicherheit<br />
Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.<br />
Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.</p>
        <Button
          label='Volver a la página de inicio'
          link='/'
          external={false}
        />
      </article>
    </section>
  )
}

export default AvisoLegal
