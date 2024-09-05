document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const rewardSection = document.getElementById('reward');
    const main = document.getElementById('main');
    const tasksPage = document.getElementById('tasks');
    const rewardAmountElem = document.getElementById('reward-amount');
    const claimBtn = document.getElementById('claim-btn');
    const balanceAmountElem = document.getElementById('balance-amount');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const homeTab = document.getElementById('home-tab');
    const tasksTab = document.getElementById('tasks-tab');
    const homeTabTasks = document.getElementById('home-tab-tasks');
    const tasksTabTasks = document.getElementById('tasks-tab-tasks');

    // Симуляция загрузки на 3 секунды
    setTimeout(() => {
        loader.classList.add('hidden');
        rewardSection.classList.remove('hidden');

        // Проверяем, если пользователь уже получил награду
        let balance = localStorage.getItem('ratcoin_balance');
        if (balance === null) {
            // Генерация случайной награды от 1000 до 5000
            const randomReward = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
            rewardAmountElem.textContent = randomReward;
            balance = randomReward;
        } else {
            // Если баланс уже есть, сразу переходим на главную страницу
            showMainPage(balance);
        }

        // Действие по кнопке
        claimBtn.addEventListener('click', () => {
            localStorage.setItem('ratcoin_balance', balance);
            showMainPage(balance);
        });

    }, 3000);

    function showMainPage(balance) {
        rewardSection.classList.add('hidden');
        main.classList.remove('hidden');
        balanceAmountElem.textContent = balance;
    }

    // Переключение на вкладку "Задания"
    tasksTab.addEventListener('click', () => {
        main.classList.add('hidden');
        tasksPage.classList.remove('hidden');
    });

    // Возврат на главную вкладку
    homeTab.addEventListener('click', () => {
        tasksPage.classList.add('hidden');
        main.classList.remove('hidden');
    });

    homeTabTasks.addEventListener('click', () => {
        tasksPage.classList.add('hidden');
        main.classList.remove('hidden');
    });

    // Нажатие на кнопку подписки
    subscribeBtn.addEventListener('click', () => {
        let balance = localStorage.getItem('ratcoin_balance');
        if (!localStorage.getItem('subscribed')) {
            balance = parseInt(balance) + 500;
            localStorage.setItem('ratcoin_balance', balance);
            localStorage.setItem('subscribed', 'true');
            alert('Вы получили 500 RatCoin за подписку!');
        } else {
            alert('Вы уже получили награду за подписку.');
        }
    });
});
