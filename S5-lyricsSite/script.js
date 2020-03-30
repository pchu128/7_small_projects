// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////

//*** song-list section ***//
function insertSongs() {
//   插入 Bootstrap 的 NAV 區塊
  songList.innerHTML = '<div id = "songListDiv" class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical"></div>'
  let songListDiv = document.querySelector('#songListDiv')
  
//   forEach 迴圈產生歌名
  album.tracks.forEach(songName => {
//     刪除歌名所有空白，才能夠用在 id 中（除了空白格，括號也要除掉，\s 沒辦法解決，想其他辦法 => \s 改成 \w 即可）
    let songNameTrim = songName.replace(/\W/g, '')
    songListDiv.innerHTML += `
      <a class="nav-link" id="v-pills-${songNameTrim}-tab" data-toggle="pill" href="#v-pills-${songNameTrim}" role="tab" aria-controls="v-pills-${songNameTrim}" aria-selected="false">${songName}</a>
    `
  })
}

//*** lyrics-panel section ***//
function getLyrics() {
//   插入 Bootstrap 的 content 區塊
  lyricsPanel.innerHTML = '<div id = "lyricsPanelDiv" class="tab-content" id="v-pills-tabContent"></div>'
  let lyricsPanelDiv = document.querySelector('#lyricsPanelDiv')
  
//   forEach 迴圈自動 get 歌詞
  album.tracks.forEach(songName => {
    let songNameTrim = songName.replace(/\W/g, '')
    axios.get('https://api.lyrics.ovh/v1/Adele/' + songName )
      .then(function (response) {
        lyricsPanelDiv.innerHTML += `
          <pre class="tab-pane fade" id="v-pills-${songNameTrim}" role="tabpanel" aria-labelledby="v-pills-${songNameTrim}-tab">${response.data.lyrics}</pre>
        `
    })
  })
}

// 主程式
insertSongs()
getLyrics()