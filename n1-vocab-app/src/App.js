import React, { useState } from 'react';
import './App.css';  // Import các styles (CSS)

const vocabList = [
  { kanji: '努力', reading: 'どりょく', meaning: 'Nỗ lực' },
  { kanji: '挑戦', reading: 'ちょうせん', meaning: 'Thử thách' },
  { kanji: '習慣', reading: 'しゅうかん', meaning: 'Thói quen' },
  { kanji: '重要', reading: 'じゅうよう', meaning: 'Quan trọng' },
];

function App() {
  const [currentWord, setCurrentWord] = useState(0);  // Chỉ số từ hiện tại
  const [showMeaning, setShowMeaning] = useState(false);  // Biến để hiển thị nghĩa từ

  // Hàm chuyển sang từ tiếp theo
  const nextWord = () => {
    setCurrentWord((prev) => (prev + 1) % vocabList.length); // Nếu hết từ, quay lại từ đầu
  };

  return (
    <div className="App">
      <h1>Học từ vựng N1</h1>  {/* Tiêu đề ứng dụng */}
      
      <div className="flashcard">
        {/* Hiển thị Kanji và Reading */}
        <h2>{vocabList[currentWord].kanji} ({vocabList[currentWord].reading})</h2>

        {/* Nếu người dùng chọn, hiển thị nghĩa của từ */}
        {showMeaning && <p>{vocabList[currentWord].meaning}</p>}

        {/* Nút để ẩn hoặc hiện nghĩa */}
        <button onClick={() => setShowMeaning(!showMeaning)}>
          {showMeaning ? 'Ẩn nghĩa' : 'Hiện nghĩa'}
        </button>

        {/* Nút để chuyển sang từ tiếp theo */}
        <button onClick={nextWord}>Từ tiếp theo</button>
      </div>
    </div>
  );
}

export default App;
