// 游戏配置
const CONFIG = {
    totalScore: 100,
    blockSpeed: 2,
    hitTolerance: 50,
    perfectTolerance: 15,
    comboTimeWindow: 2000,
    songDuration: 202, // RODEO歌曲时长 03:22 = 202秒
    members: [
        { id: 1, name: "慧彬", color: "#FF6B6B" },
        { id: 2, name: "娜允", color: "#4ECDC4" },
        { id: 3, name: "Jane", color: "#FFD166" },
        { id: 4, name: "珠伊", color: "#06D6A0" },
        { id: 5, name: "Ahin", color: "#118AB2" },
        { id: 6, name: "Nancy", color: "#EF476F" }
    ]
};

// 时间转换函数：将"00:00"格式转换为秒数
function timeToSeconds(timeStr) {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
}

// 默认歌词数据 - 已修复时间格式和结构
const defaultLyrics = [
    {
        "time": "00:02.62",
        "member": 4,
        "text": "卷-卷-卷"
    },
    {
        "time": "00:05.24",
        "member": 4,
        "text": "一路骑到底，我绝不放弃"
    },
    {
        "time": "00:07.87",
        "member": 4,
        "text": "卷-卷-卷"
    },
    {
        "time": "00:10.49",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "00:13.11",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "00:15.74",
        "member": 3,
        "text": "不辛苦"
    },
    {
        "time": "00:18.36",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "00:20.99",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "00:23.61",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "00:26.23",
        "member": 2,
        "text": "骑上电驴像上套索"
    },
    {
        "time": "00:28.86",
        "member": 1,
        "text": "大声喊，工作到晕头转向"
    },
    {
        "time": "00:31.48",
        "member": 6,
        "text": "哦，我的天"
    },
    {
        "time": "00:34.10",
        "member": 5,
        "text": "浪潮一样，把我推着走"
    },
    {
        "time": "00:36.73",
        "member": 2,
        "text": "不断被推搡，东撞西撞，根本停不下来"
    },
    {
        "time": "00:39.35",
        "member": 1,
        "text": "转啊转，又转回原点，摇晃中还要继续往前"
    },
    {
        "time": "00:41.98",
        "member": 6,
        "text": "左也卷，右也卷，耳边全是累了躺平，但我还是往前冲"
    },
    {
        "time": "00:44.60",
        "member": 5,
        "text": "从现在开始，动作像机器"
    },
    {
        "time": "00:47.22",
        "member": 6,
        "text": "哦哦哦，让我疯狂"
    },
    {
        "time": "00:49.85",
        "member": 1,
        "text": "起床了，上班了，搞钱！"
    },
    {
        "time": "00:52.47",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "00:55.09",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "00:57.72",
        "member": 3,
        "text": "不辛苦"
    },
    {
        "time": "01:00.34",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "01:02.97",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "01:05.59",
        "member": 6,
        "text": "越跑越快转呀转，一天到晚拼命干"
    },
    {
        "time": "01:08.21",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "01:10.84",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "01:13.46",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "01:16.08",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "01:18.71",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "01:21.33",
        "member": 4,
        "text": "骑上电驴，像套索一样"
    },
    {
        "time": "01:23.96",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "01:26.58",
        "member": 4,
        "text": "继续跑，继续跑，继续拼命跑"
    },
    {
        "time": "01:29.20",
        "member": 4,
        "text": "卷-卷-卷"
    },
    {
        "time": "01:31.83",
        "member": 5,
        "text": "陷更深，跑更快，其实我，心里一阵阵发麻"
    },
    {
        "time": "01:34.45",
        "member": 6,
        "text": "啦啦啦啦，边跑边哼着歌"
    },
    {
        "time": "01:37.07",
        "member": 2,
        "text": "脚底都要冒火，没一刻能停，继续跑，我跑，我跑"
    },
    {
        "time": "01:39.70",
        "member": 1,
        "text": "我跟着浪潮一起冲"
    },
    {
        "time": "01:42.32",
        "member": 5,
        "text": "感觉快要跑不动"
    },
    {
        "time": "01:44.95",
        "member": 6,
        "text": "左也卷，右也卷，耳边全是累了躺平，但我还是往前冲"
    },
    {
        "time": "01:47.57",
        "member": 1,
        "text": "从现在开始，动作像机器"
    },
    {
        "time": "01:50.19",
        "member": 6,
        "text": "哦哦哦，让我疯狂"
    },
    {
        "time": "01:52.82",
        "member": 5,
        "text": "起床了，上班了，搞钱！"
    },
    {
        "time": "01:55.44",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "01:58.07",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "02:00.69",
        "member": 3,
        "text": "不辛苦"
    },
    {
        "time": "02:03.31",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "02:05.94",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "02:08.56",
        "member": 6,
        "text": "越跑越快转呀转，一天到晚拼命干"
    },
    {
        "time": "02:11.18",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "02:13.81",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "02:16.43",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "02:19.06",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "02:21.68",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "02:24.30",
        "member": 4,
        "text": "骑上电驴，像套索一样"
    },
    {
        "time": "02:26.93",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "02:29.55",
        "member": 4,
        "text": "继续跑，继续跑，继续拼命跑"
    },
    {
        "time": "02:32.17",
        "member": 4,
        "text": "卷-卷-卷"
    },
    {
        "time": "02:34.80",
        "member": 1,
        "text": "呼——颤抖的这颗心，再也扛不住"
    },
    {
        "time": "02:37.42",
        "member": 2,
        "text": "到最后一刻，也不能松懈"
    },
    {
        "time": "02:40.05",
        "member": 5,
        "text": "一步两步 等下"
    },
    {
        "time": "02:42.67",
        "member": 6,
        "text": "发狠似的摁电梯"
    },
    {
        "time": "02:45.29",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "02:47.92",
        "member": 3,
        "text": "不辛苦"
    },
    {
        "time": "02:50.54",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "02:53.16",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "02:55.79",
        "member": 6,
        "text": "越跑越快转呀转，一天到晚拼命干"
    },
    {
        "time": "02:58.41",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "03:01.04",
        "member": 3,
        "text": "牛马"
    },
    {
        "time": "03:03.66",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "03:06.28",
        "member": [1, 2, 3, 4, 5, 6],
        "text": "卷-卷-卷"
    },
    {
        "time": "03:08.91",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "03:11.53",
        "member": 4,
        "text": "骑上电驴像上套索"
    },
    {
        "time": "03:14.15",
        "member": 4,
        "text": "嘿呀呀呀呀呀呀呀"
    },
    {
        "time": "03:16.78",
        "member": 4,
        "text": "继续跑，继续跑，继续拼命跑"
    },
    {
        "time": "03:19.40",
        "member": 4,
        "text": "卷-卷-卷"
    }
].map(lyric => ({
    ...lyric,
    time: timeToSeconds(lyric.time) // 转换为秒数
}));

// 游戏状态
let gameState = {
    score: CONFIG.totalScore,
    isPlaying: false,
    startTime: 0,
    elapsedTime: 0,
    timerInterval: null,
    blockInterval: null,
    activeBlocks: [],
    currentLyric: "",
    currentMember: null,
    combo: 0,
    maxCombo: 0,
    lastHitTime: 0,
    audio: null,
    userPoints: 0,
    userName: "玩家",
    currentScreen: "start"
};

// 初始化游戏
function initGame() {
    console.log("游戏初始化开始");
    // 创建赛道
    createLanes();
    
    // 加载用户数据
    loadUserData();
    
    // 设置事件监听
    setupEventListeners();
    
    // 显示主菜单
    showScreen('start');
    console.log("游戏初始化完成");
}

// 创建赛道
function createLanes() {
    const lanesContainer = document.getElementById('lanes');
    lanesContainer.innerHTML = '';
    
    CONFIG.members.forEach(member => {
        const lane = document.createElement('div');
        lane.className = 'lane';
        lane.dataset.memberId = member.id;
        
        const avatar = document.createElement('div');
        avatar.className = 'member-avatar';
        // 使用默认头像
        const avatarImg = `assets/avatars/${member.id}.jpg`;
        avatar.innerHTML = `<img src="${avatarImg}" alt="${member.name}">`;
        
        const blocksArea = document.createElement('div');
        blocksArea.className = 'blocks-area';
        
        lane.appendChild(avatar);
        lane.appendChild(blocksArea);
        lanesContainer.appendChild(lane);
        
        // 添加点击事件
        lane.addEventListener('click', () => handleLaneClick(member.id));
    });
}

// 加载用户数据
function loadUserData() {
    gameState.userName = localStorage.getItem('userName') || '玩家';
    gameState.userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
    
    document.getElementById('userName').textContent = gameState.userName;
    document.getElementById('userPoints').textContent = `积分: ${gameState.userPoints}`;
}

// 设置事件监听
function setupEventListeners() {
    console.log("设置事件监听器");
    // 主菜单按钮
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    document.getElementById('leaderboardBtn').addEventListener('click', showLeaderboard);
    document.getElementById('shareBtn').addEventListener('click', showShareModal);
    
    // 游戏控制按钮
    document.getElementById('pauseBtn').addEventListener('click', pauseGame);
    
    // 结束屏幕按钮
    document.getElementById('playAgainBtn').addEventListener('click', startGame);
    document.getElementById('backToMenuBtn').addEventListener('click', () => showScreen('start'));
    
    // 排行榜按钮
    document.getElementById('backFromLeaderboardBtn').addEventListener('click', () => showScreen('start'));
    
    // 分享模态框
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('shareModal').style.display = 'none';
    });
    
    document.getElementById('copyLinkBtn').addEventListener('click', copyShareLink);
    
    // 排行榜标签
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateLeaderboard(this.dataset.tab);
        });
    });
    
    // 分享选项
    document.querySelectorAll('.share-option').forEach(option => {
        option.addEventListener('click', function() {
            shareToPlatform(this.dataset.platform);
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('shareModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 显示屏幕
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(el => {
        el.style.display = 'none';
    });
    
    document.getElementById(`${screen}Screen`).style.display = 'block';
    gameState.currentScreen = screen;
    
    if (screen === 'leaderboard') {
        updateLeaderboard('daily');
    }
}

// 开始游戏
function startGame() {
    console.log("开始游戏按钮被点击");
    resetGame();
    showScreen('game');
    
    gameState.isPlaying = true;
    gameState.startTime = Date.now();
    
    // 开始计时
    gameState.timerInterval = setInterval(updateTimer, 1000);
    
    // 开始生成方块
    gameState.blockInterval = setInterval(generateBlocks, 100);
    
    // 播放歌曲
    playSong();
    console.log("游戏已开始");
}

// 播放歌曲
function playSong() {
    const audio = document.getElementById('gameAudio');
    gameState.audio = audio;
    
    // 尝试播放音频
    audio.play().then(() => {
        console.log('RODEO歌曲开始播放');
    }).catch(error => {
        console.log('音频播放失败:', error);
        // 如果自动播放被阻止，显示提示
        if (error.name === 'NotAllowedError') {
            alert('请点击页面任意位置以开始播放音乐');
        }
    });
}

// 暂停游戏
function pauseGame() {
    if (!gameState.isPlaying) {
        // 如果游戏已暂停，恢复游戏
        gameState.isPlaying = true;
        gameState.startTime = Date.now() - gameState.elapsedTime * 1000;
        gameState.blockInterval = setInterval(generateBlocks, 100);
        document.getElementById('pauseBtn').textContent = "暂停";
        
        // 恢复音频播放
        if (gameState.audio) {
            gameState.audio.play();
        }
    } else {
        // 暂停游戏
        gameState.isPlaying = false;
        clearInterval(gameState.blockInterval);
        document.getElementById('pauseBtn').textContent = "继续";
        
        // 暂停音频
        if (gameState.audio) {
            gameState.audio.pause();
        }
    }
}

// 更新计时器
function updateTimer() {
    gameState.elapsedTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    const minutes = Math.floor(gameState.elapsedTime / 60);
    const seconds = gameState.elapsedTime % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // 检查游戏是否结束
    if (gameState.elapsedTime >= CONFIG.songDuration) {
        endGame();
    }
}

// 生成方块
function generateBlocks() {
    if (!gameState.isPlaying) return;
    
    // 查找当前时间对应的歌词
    const currentLyric = defaultLyrics.find(lyric => 
        Math.abs(lyric.time - gameState.elapsedTime) <= 0.5
    );
    
    if (currentLyric) {
        gameState.currentLyric = currentLyric.text;
        document.getElementById('lyrics').textContent = gameState.currentLyric;
        
        // 确定演唱成员
        const members = Array.isArray(currentLyric.member) ? currentLyric.member : [currentLyric.member];
        gameState.currentMember = members;
        
        // 高亮对应成员的头像
        document.querySelectorAll('.member-avatar').forEach(avatar => {
            avatar.classList.remove('active');
        });
        
        members.forEach(memberId => {
            const avatar = document.querySelector(`.lane[data-member-id="${memberId}"] .member-avatar`);
            if (avatar) {
                avatar.classList.add('active');
                
                // 检查是否已存在相同成员的方块，避免重复生成
                const existingBlock = gameState.activeBlocks.find(block => 
                    block.memberId === memberId && 
                    block.text === currentLyric.text &&
                    block.position < 100 // 防止在屏幕底部重复生成
                );
                
                if (!existingBlock) {
                    createBlock(memberId, currentLyric.text);
                }
            }
        });
    }
    
    // 更新方块位置
    updateBlocks();
}

// 创建方块
function createBlock(memberId, text) {
    const lane = document.querySelector(`.lane[data-member-id="${memberId}"] .blocks-area`);
    if (!lane) return;
    
    const block = document.createElement('div');
    block.className = 'block';
    block.dataset.memberId = memberId;
    block.textContent = text;
    block.style.bottom = '0px';
    
    // 设置方块颜色
    const member = CONFIG.members.find(m => m.id === memberId);
    if (member) {
        block.style.background = `linear-gradient(to bottom, ${member.color}, ${adjustColor(member.color, -30)})`;
    }
    
    lane.appendChild(block);
    
    // 添加到活动方块列表
    const blockData = {
        element: block,
        memberId: memberId,
        text: text,
        position: 0,
        hit: false
    };
    
    gameState.activeBlocks.push(blockData);
}

// 更新方块位置
function updateBlocks() {
    gameState.activeBlocks.forEach(blockData => {
        if (!gameState.isPlaying) return;
        
        blockData.position += CONFIG.blockSpeed;
        blockData.element.style.bottom = `${blockData.position}px`;
        
        // 检查方块是否到达点击线
        const hitLine = document.querySelector('.hit-line');
        const hitLinePos = hitLine.getBoundingClientRect().top;
        const blockPos = blockData.element.getBoundingClientRect().bottom;
        
        // 如果方块超过点击线且未被点击，视为错过
        if (blockPos > hitLinePos + CONFIG.hitTolerance && !blockData.hit) {
            blockData.hit = true;
            blockData.element.classList.add('missed');
            decreaseScore(5);
            resetCombo();
            
            // 移除方块
            setTimeout(() => {
                if (blockData.element.parentNode) {
                    blockData.element.remove();
                }
                gameState.activeBlocks = gameState.activeBlocks.filter(b => b !== blockData);
            }, 500);
        }
        
        // 如果方块移出屏幕，移除它
        if (blockData.position > 400) {
            if (blockData.element.parentNode) {
                blockData.element.remove();
            }
            gameState.activeBlocks = gameState.activeBlocks.filter(b => b !== blockData);
        }
    });
}

// 处理赛道点击
function handleLaneClick(memberId) {
    if (!gameState.isPlaying) return;
    
    // 查找该赛道上可点击的方块
    const hittableBlocks = gameState.activeBlocks.filter(block => {
        if (block.hit) return false;
        
        const hitLine = document.querySelector('.hit-line');
        const hitLinePos = hitLine.getBoundingClientRect().top;
        const blockPos = block.element.getBoundingClientRect().bottom;
        
        return block.memberId === memberId && 
               Math.abs(blockPos - hitLinePos) <= CONFIG.hitTolerance;
    });
    
    if (hittableBlocks.length > 0) {
        // 点击正确
        const block = hittableBlocks[0];
        block.hit = true;
        
        const hitLine = document.querySelector('.hit-line');
        const hitLinePos = hitLine.getBoundingClientRect().top;
        const blockPos = block.element.getBoundingClientRect().bottom;
        const accuracy = Math.abs(blockPos - hitLinePos);
        
        // 判断点击精度
        if (accuracy <= CONFIG.perfectTolerance) {
            block.element.classList.add('perfect');
            increaseScore(5);
        } else {
            block.element.classList.add('good');
            increaseScore(2);
        }
        
        // 更新连击
        updateCombo();
        
        // 移除方块
        setTimeout(() => {
            if (block.element.parentNode) {
                block.element.remove();
            }
            gameState.activeBlocks = gameState.activeBlocks.filter(b => b !== block);
        }, 200);
    } else {
        // 点击错误
        decreaseScore(10);
        resetCombo();
    }
}

// 增加分数
function increaseScore(points) {
    gameState.score = Math.min(CONFIG.totalScore, gameState.score + points);
    document.getElementById('score').textContent = gameState.score;
}

// 减少分数
function decreaseScore(points) {
    gameState.score = Math.max(0, gameState.score - points);
    document.getElementById('score').textContent = gameState.score;
    
    if (gameState.score <= 0) {
        endGame();
    }
}

// 更新连击
function updateCombo() {
    const now = Date.now();
    
    // 检查是否在连击时间窗口内
    if (now - gameState.lastHitTime <= CONFIG.comboTimeWindow) {
        gameState.combo++;
    } else {
        gameState.combo = 1;
    }
    
    gameState.lastHitTime = now;
    gameState.maxCombo = Math.max(gameState.maxCombo, gameState.combo);
    
    document.getElementById('combo').textContent = gameState.combo;
    
    // 连击特效
    if (gameState.combo >= 5) {
        document.getElementById('combo').style.color = '#FFD700';
        document.getElementById('combo').style.textShadow = '0 0 10px #FFD700';
    } else {
        document.getElementById('combo').style.color = '#4ECDC4';
        document.getElementById('combo').style.textShadow = 'none';
    }
}

// 重置连击
function resetCombo() {
    gameState.combo = 0;
    document.getElementById('combo').textContent = "0";
    document.getElementById('combo').style.color = '#4ECDC4';
    document.getElementById('combo').style.textShadow = 'none';
}

// 结束游戏
function endGame() {
    gameState.isPlaying = false;
    clearInterval(gameState.timerInterval);
    clearInterval(gameState.blockInterval);
    
    // 计算获得积分
    const earnedPoints = Math.floor(gameState.score / 10) + gameState.maxCombo * 2;
    gameState.userPoints += earnedPoints;
    
    // 保存用户数据
    saveUserData();
    
    // 更新结束屏幕
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('maxCombo').textContent = gameState.maxCombo;
    document.getElementById('earnedPoints').textContent = earnedPoints;
    
    // 显示结束屏幕
    showScreen('end');
    
    // 停止音频
    if (gameState.audio) {
        gameState.audio.pause();
        gameState.audio.currentTime = 0;
    }
}

// 重置游戏
function resetGame() {
    gameState.score = CONFIG.totalScore;
    gameState.isPlaying = false;
    gameState.startTime = 0;
    gameState.elapsedTime = 0;
    gameState.activeBlocks = [];
    gameState.currentLyric = "";
    gameState.currentMember = null;
    gameState.combo = 0;
    gameState.maxCombo = 0;
    gameState.lastHitTime = 0;
    
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('timer').textContent = "0:00";
    document.getElementById('combo').textContent = "0";
    document.getElementById('lyrics').textContent = "准备开始...";
    document.getElementById('pauseBtn').textContent = "暂停";
    
    // 清除所有方块
    document.querySelectorAll('.block').forEach(block => block.remove());
    
    // 重置成员头像状态
    document.querySelectorAll('.member-avatar').forEach(avatar => {
        avatar.classList.remove('active');
    });
    
    // 清除定时器
    clearInterval(gameState.timerInterval);
    clearInterval(gameState.blockInterval);
    
    // 停止音频
    if (gameState.audio) {
        gameState.audio.pause();
        gameState.audio.currentTime = 0;
    }
}

// 保存用户数据
function saveUserData() {
    localStorage.setItem('userName', gameState.userName);
    localStorage.setItem('userPoints', gameState.userPoints.toString());
    document.getElementById('userPoints').textContent = `积分: ${gameState.userPoints}`;
}

// 显示排行榜
function showLeaderboard() {
    showScreen('leaderboard');
}

// 更新排行榜
function updateLeaderboard(type) {
    const leaderboardList = document.getElementById('leaderboardList');
    
    // 从localStorage获取排行榜数据
    let leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || {};
    
    // 如果没有对应类型的数据，创建默认数据
    if (!leaderboardData[type]) {
        leaderboardData[type] = [
            { name: '玩家1', score: 950, points: 120 },
            { name: '玩家2', score: 890, points: 110 },
            { name: '玩家3', score: 850, points: 105 },
            { name: gameState.userName, score: gameState.score, points: gameState.userPoints },
            { name: '玩家4', score: 780, points: 95 }
        ];
        
        // 按分数排序
        leaderboardData[type].sort((a, b) => b.score - a.score);
        
        // 保存到localStorage
        localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
    }
    
    const data = leaderboardData[type] || [];
    
    leaderboardList.innerHTML = '';
    data.forEach((item, index) => {
        const isCurrentUser = item.name === gameState.userName;
        const itemEl = document.createElement('div');
        itemEl.className = `leaderboard-item ${isCurrentUser ? 'current-user' : ''}`;
        itemEl.innerHTML = `
            <div class="leaderboard-rank">${index + 1}</div>
            <div class="leaderboard-name">${item.name}</div>
            <div class="leaderboard-score">${item.score}分</div>
            <div class="leaderboard-points">${item.points}积分</div>
        `;
        leaderboardList.appendChild(itemEl);
    });
}

// 显示分享模态框
function showShareModal() {
    // 生成分享链接
    const shareUrl = window.location.href;
    document.getElementById('shareUrl').value = shareUrl;
    
    document.getElementById('shareModal').style.display = 'flex';
}

// 复制分享链接
function copyShareLink() {
    const shareUrl = document.getElementById('shareUrl');
    shareUrl.select();
    shareUrl.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        alert('链接已复制到剪贴板！');
        
        // 分享奖励积分
        gameState.userPoints += 10;
        saveUserData();
        alert('分享成功！获得10积分奖励');
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制链接');
    }
}

// 分享到平台
function shareToPlatform(platform) {
    const shareUrl = document.getElementById('shareUrl').value;
    const shareText = `我在MOMOLAND RODEO节奏游戏中获得了${gameState.userPoints}积分，快来挑战我吧！`;
    
    let shareWindowUrl = '';
    
    switch (platform) {
        case 'wechat':
            alert('请复制链接后在微信中分享');
            break;
        case 'douyin':
            alert('请复制链接后在抖音中分享');
            break;
        case 'xiaohongshu':
            alert('请复制链接后在小红书中分享');
            break;
        default:
            return;
    }
    
    // 分享奖励积分
    gameState.userPoints += 10;
    saveUserData();
    alert('分享成功！获得10积分奖励');
}

// 调整颜色亮度
function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

// 初始化游戏
window.addEventListener('load', initGame);