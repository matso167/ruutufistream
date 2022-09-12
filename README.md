# ruutufistream
Share ruutu.fi streams to anywhere.

Installation (Manjaro/Arch linux):
1. Install dependencies:<br/>
sudo pacman -S git nodejs npm streamlink<br/>
2. git clone https://github.com/matso167/ruutufistream.git
3. touch stream_m3u8_url
3. Paste the .m3u8 url in file stream_m3u8_url. You can find it on ruutu.fi stream page with developer console. URL is something like: https://*.nelonenmedia.fi/out/v1/*/index_3.m3u8?start=*&token=*
4. Install and run: <br/>
npm install<br/>
node express.js
5. Go to http://localhost:8080
6. (optional) Make any port forwarding in you router to make the stream available for others


