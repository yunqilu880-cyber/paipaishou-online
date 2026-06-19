const ACTIONS = {
  charge: {
    id: "charge",
    name: "加蛋",
    cost: 0,
    icon: "plus",
    description: "获得1颗蛋。",
  },
  attack: {
    id: "attack",
    name: "平A",
    cost: 0,
    icon: "sword",
    description: "造成1点伤害。",
    isAttack: true,
  },
  defend: {
    id: "defend",
    name: "防御",
    cost: 0,
    icon: "shield",
    description: "抵挡普通攻击。被碎防后不能再用。",
  },
  dodge: {
    id: "dodge",
    name: "闪",
    cost: 1,
    icon: "dash",
    description: "躲开本回合攻击。",
  },
  taunt: {
    id: "taunt",
    name: "挑",
    cost: 1,
    icon: "hook",
    description: "造成1点伤害；命中后下回合强制对方加蛋。",
    isAttack: true,
  },
  stealth: {
    id: "stealth",
    name: "暗隐",
    cost: 1,
    icon: "eye",
    description: "进入暗隐3回合；被攻击时破隐并免疫一次。",
  },
  dragon: {
    id: "dragon",
    name: "落龙刺",
    cost: 2,
    icon: "spear",
    description: "造成3点伤害；打到防御则碎防。",
    isAttack: true,
  },
  ultimate: {
    id: "ultimate",
    name: "瞬龙杀",
    cost: 4,
    icon: "burst",
    description: "下回合造成4点追踪真伤；无视暗隐和飞镖，对方防御则碎防并扣2点。",
  },
  wukongTurn: {
    id: "wukongTurn",
    name: "转",
    cost: 1,
    icon: "spear",
    description: "消耗1颗蛋，造成2点伤害。",
    damage: 2,
    isAttack: true,
    isSkillAttack: true,
  },
  wukongClone: {
    id: "wukongClone",
    name: "火分身",
    cost: 1,
    icon: "eye",
    description: "消耗1颗蛋，叠加1层火分身，最多2层；每层可挡一次伤害，也可给技能命中加1伤。",
  },
  wukongUltimate: {
    id: "wukongUltimate",
    name: "火魔斩",
    cost: 3,
    icon: "burst",
    description: "造成3点伤害，刷新免费烈焰闪；本回合自身无法被选中。",
    damage: 3,
    isAttack: true,
    isSkillAttack: true,
  },
};

const ACTION_ORDER = [
  "charge",
  "attack",
  "defend",
  "dodge",
  "taunt",
  "stealth",
  "dragon",
  "ultimate",
];

const HEROES = {
  dragon: {
    id: "dragon",
    name: "小龙女·暗隐",
    enemyName: "暗隐镜像",
    maxHp: 5,
    avatar: "assets/dragon-girl-avatar-opt.webp?v=1",
    normalArt: "assets/dragon-girl-opt.webp?v=1",
    stealthArt: "assets/dragon-girl-stealth-opt.webp?v=1",
    actionOrder: ACTION_ORDER,
    actionOverrides: {
      dodge: {
        name: "飞镖",
        icon: "dart",
        description: "躲开本回合攻击，并投出飞镖造成1点伤害。",
      },
    },
  },
  wukong: {
    id: "wukong",
    name: "孙悟空·幻变",
    enemyName: "幻变镜像",
    maxHp: 6,
    avatar: "assets/wukong-avatar-opt.webp?v=1",
    normalArt: "assets/wukong-opt.webp?v=1",
    stealthArt: "assets/wukong-opt.webp?v=1",
    actionOrder: ["charge", "attack", "defend", "dodge", "taunt", "wukongTurn", "wukongClone", "wukongUltimate"],
    actionOverrides: {
      dodge: {
        name: "烈焰闪",
        icon: "dash",
        description: "躲开本回合攻击并回复1点血；开局自带一次免费使用。",
      },
    },
  },
};

const ICONS = {
  plus: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>`,
  sword: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 4.5 20 4l-.5 5.5L8.5 20 4 20l.2-4.3Z" />
      <path d="m13 7 4 4" />
      <path d="m8.5 15.5 2 2" />
    </svg>`,
  shield: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.4-2.9 7.5-7 10-4.1-2.5-7-5.6-7-10V6Z" />
    </svg>`,
  dash: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8h8" />
      <path d="M2 13h12" />
      <path d="M7 18h13" />
      <path d="m17 14 4 4-4 4" />
    </svg>`,
  dart: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 20 9-16 2.2 6.8L22 13Z" />
      <path d="m13 4 2 8" />
      <path d="m4 20 11.2-9.2" />
      <path d="m9 16 2 3" />
    </svg>`,
  hook: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5h8a4 4 0 0 1 0 8H9a4 4 0 1 0 4 4" />
      <path d="M7 5v5" />
    </svg>`,
  eye: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    </svg>`,
  spear: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20 18 6" />
      <path d="m14 4 6-1-1 6" />
      <path d="m15 7 2 2" />
      <path d="M6 14h4v4" />
    </svg>`,
  burst: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 2.1 6.1L20 6l-2.1 5.9L24 14l-6.1 2.1L20 22l-5.9-2.1L12 26l-2.1-6.1L4 22l2.1-5.9L0 14l6.1-2.1L4 6l5.9 2.1Z" transform="scale(.86) translate(2 0)" />
    </svg>`,
};

const MAX_HP = 5;
const STEALTH_DURATION = 3;
const COMPACT_RESOURCE_THRESHOLD = 6;
const ULTIMATE_ATTACK_LEVEL = 999;
const AI_LEVELS = {
  trash: "垃圾",
  god: "神",
  principal: "罗志康",
};

const dom = {
  actionGrid: document.querySelector("#actionGrid"),
  aiDifficultyOptions: document.querySelectorAll("[data-ai]"),
  battleLog: document.querySelector("#battleLog"),
  characterName: document.querySelector("#characterName"),
  characterSelect: document.querySelector("#characterSelect"),
  clearLogBtn: document.querySelector("#clearLogBtn"),
  cloneBoostToggle: document.querySelector("#cloneBoostToggle"),
  controlTitle: document.querySelector("#controlTitle"),
  enemyCard: document.querySelector("#enemyCard"),
  enemyEggs: document.querySelector("#enemyEggs"),
  enemyEggTray: document.querySelector("#enemyEggTray"),
  enemyHpBar: document.querySelector("#enemyHpBar"),
  enemyHpText: document.querySelector("#enemyHpText"),
  enemyIntent: document.querySelector("#enemyIntent"),
  enemyStatuses: document.querySelector("#enemyStatuses"),
  playerCard: document.querySelector("#playerCard"),
  playerEggs: document.querySelector("#playerEggs"),
  playerEggTray: document.querySelector("#playerEggTray"),
  playerHpBar: document.querySelector("#playerHpBar"),
  playerHpText: document.querySelector("#playerHpText"),
  playerIntent: document.querySelector("#playerIntent"),
  playerStatuses: document.querySelector("#playerStatuses"),
  playerActionResult: document.querySelector("#playerActionResult"),
  resetBtn: document.querySelector("#resetBtn"),
  roundHint: document.querySelector("#roundHint"),
  roundNumber: document.querySelector("#roundNumber"),
  selectedAction: document.querySelector("#selectedAction"),
  enemyActionResult: document.querySelector("#enemyActionResult"),
};

let game;
let selectedHeroId = "dragon";
let selectedAiLevel = "god";

function getHero(heroId) {
  return HEROES[heroId] || HEROES.dragon;
}

function pickRandomHeroId() {
  return pickRandom(Object.keys(HEROES)) || "dragon";
}

function getAction(actor, actionId) {
  const hero = getHero(actor.heroId);
  return {
    ...ACTIONS[actionId],
    ...(hero.actionOverrides?.[actionId] || {}),
  };
}

function getActionOrder(actor) {
  return getHero(actor.heroId).actionOrder;
}

function getMaxHp(actorOrHeroId) {
  const heroId = typeof actorOrHeroId === "string" ? actorOrHeroId : actorOrHeroId.heroId;
  return getHero(heroId).maxHp || MAX_HP;
}

function createFighter(id, displayName, side, heroId) {
  const hero = getHero(heroId);
  return {
    id,
    displayName,
    side,
    heroId,
    heroName: hero.name,
    hp: getMaxHp(heroId),
    eggs: 0,
    defenseBroken: false,
    forcedCharge: false,
    pendingUltimate: false,
    stealthTurns: 0,
    fireClones: 0,
    freeDodgeAvailable: heroId === "wukong",
    untargetable: false,
    tauntStreak: 0,
    lastAction: null,
    pendingAnimation: null,
  };
}

function createGame(heroId = selectedHeroId, enemyHeroId = pickRandomHeroId(), aiLevel = selectedAiLevel) {
  const hero = getHero(heroId);
  const enemyHero = getHero(enemyHeroId);
  return {
    round: 1,
    over: false,
    aiLevel,
    selectedAction: null,
    lastRoundActions: null,
    player: createFighter("player", "你", "player", heroId),
    enemy: createFighter("enemy", "电脑", "enemy", enemyHeroId),
    log: [`你选择了【${hero.name}】，本局对手是【${enemyHero.name}】，人机强度【${AI_LEVELS[aiLevel]}】。`],
  };
}

function renderActions() {
  dom.actionGrid.innerHTML = "";

  getActionOrder(game.player).forEach((actionId) => {
    const action = getAction(game.player, actionId);
    const button = document.createElement("button");
    const disabledReason = getDisabledReason(game.player, action);

    button.className = `action-button action-${action.id}`;
    button.type = "button";
    button.dataset.action = action.id;
    const unavailable = Boolean(disabledReason) || game.over;
    button.dataset.disabled = unavailable ? "true" : "false";
    button.setAttribute("aria-disabled", unavailable ? "true" : "false");
    const tooltipText = disabledReason ? `${disabledReason}；${action.description}` : action.description;
    button.dataset.tooltip = tooltipText;
    button.setAttribute("aria-label", `${action.name}: ${tooltipText}`);

    if (unavailable) {
      button.classList.add("is-disabled");
    }

    if (game.selectedAction === action.id) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <span class="action-icon">${ICONS[action.icon]}</span>
      <span class="action-copy">
        <span class="action-name-row">
          <strong>${action.name}</strong>
          <span class="cost-tag">${getCostLabel(game.player, action)}</span>
        </span>
        <p>${tooltipText}</p>
      </span>
    `;

    button.addEventListener("click", () => {
      if (button.dataset.disabled === "true") return;
      game.selectedAction = action.id;
      playRound(action.id);
    });

    dom.actionGrid.appendChild(button);
  });
}

function getEffectiveCost(actor, action) {
  if (actor.heroId === "wukong" && action.id === "dodge" && actor.freeDodgeAvailable) return 0;
  return action.cost;
}

function getCostLabel(actor, action) {
  if (actor.heroId === "wukong" && action.id === "dodge" && actor.freeDodgeAvailable) return "首次免费";
  const cost = getEffectiveCost(actor, action);
  return cost ? `${cost}蛋` : "免费";
}

function getDisabledReason(actor, action) {
  if (actor.hp <= 0) return "已经结束";
  if (actor.forcedCharge && action.id !== "charge") return "被挑控制：本回合必须加蛋";
  if (action.id === "defend" && actor.defenseBroken) return "防御已被碎，不能再用";
  const cost = getEffectiveCost(actor, action);
  if (cost > actor.eggs) return `蛋不足：需要${cost}颗`;
  if (action.id === "wukongClone" && actor.fireClones >= 2) return "火分身已达到2层";
  return "";
}

function chooseEnemyAction(playerActionId) {
  const enemy = game.enemy;
  const legal = getLegalActionIds(enemy);

  if (game.aiLevel === "trash") return chooseTrashEnemyAction(legal);
  if (enemy.forcedCharge) return "charge";
  if (shouldUseOpeningCharge(playerActionId, legal)) return "charge";
  if (game.aiLevel === "principal") return choosePrincipalEnemyAction(legal, playerActionId) || chooseSmartEnemyAction(legal);
  return chooseSmartEnemyAction(legal) || chooseTrashEnemyAction(legal);
}

function getLegalActionIds(actor) {
  return getActionOrder(actor).filter((id) => !getDisabledReason(actor, getAction(actor, id)));
}

function chooseTrashEnemyAction(legal) {
  const enemy = game.enemy;
  const player = game.player;

  if (enemy.forcedCharge) return "charge";
  if (enemy.heroId === "wukong") {
    if (enemy.hp <= 2 && legal.includes("dodge")) return "dodge";
    if (enemy.eggs >= 3 && Math.random() < 0.4) return "wukongUltimate";
    if (enemy.fireClones < 2 && enemy.eggs >= 1 && Math.random() < 0.34) return "wukongClone";
    if (enemy.eggs >= 1 && Math.random() < 0.42) return "wukongTurn";
    if (enemy.eggs >= 1 && Math.random() < 0.26) return "taunt";
    if (enemy.eggs === 0 && Math.random() < 0.62) return "charge";
    return pickRandom(legal.filter((id) => id !== "wukongUltimate")) || "charge";
  }

  if (enemy.hp <= 2 && player.pendingUltimate && enemy.eggs >= 1) return "dodge";
  if (player.pendingUltimate && !enemy.defenseBroken && Math.random() < 0.45) return "defend";
  if (enemy.eggs >= 4 && Math.random() < 0.42) return "ultimate";
  if (!enemy.defenseBroken && enemy.hp <= 2 && Math.random() < 0.32) return "defend";
  if (enemy.stealthTurns <= 0 && enemy.eggs >= 1 && Math.random() < 0.24) return "stealth";
  if (enemy.eggs >= 2 && Math.random() < 0.36) return "dragon";
  if (enemy.eggs >= 1 && Math.random() < 0.3) return "taunt";
  if (player.stealthTurns > 0 && Math.random() < 0.34) return "charge";
  if (enemy.eggs === 0 && Math.random() < 0.62) return "charge";

  return pickRandom(legal.filter((id) => id !== "ultimate")) || "charge";
}

function shouldUseOpeningCharge(playerActionId, legal) {
  if (game.round > 3 || !canChoose(legal, "charge")) return false;
  return game.player.lastAction === playerActionId;
}

function chooseSmartEnemyAction(legal) {
  const enemy = game.enemy;
  const player = game.player;

  if (player.forcedCharge) return choosePunishAction(legal);
  if (player.pendingUltimate) return chooseAntiShunlongshaAction(legal);

  const killAction = chooseLethalAction(legal);
  if (killAction) return killAction;

  if (player.stealthTurns > 0) {
    if (canChoose(legal, "ultimate") && enemy.eggs >= 4) return "ultimate";
    if (canChoose(legal, "wukongClone") && enemy.fireClones < 2) return "wukongClone";
    if (canChoose(legal, "stealth") && enemy.stealthTurns <= 0) return "stealth";
    return canChoose(legal, "charge") ? "charge" : pickRandom(legal);
  }

  if (enemy.hp <= 2) {
    if (canChoose(legal, "wukongUltimate")) return "wukongUltimate";
    if (canChoose(legal, "dodge")) return "dodge";
    if (canChoose(legal, "defend")) return "defend";
  }

  if (enemy.heroId === "wukong") return chooseSmartWukongAction(legal);
  return chooseSmartDragonAction(legal);
}

function choosePrincipalEnemyAction(legal, playerActionId) {
  const enemy = game.enemy;
  const player = game.player;
  const playerAction = getAction(player, playerActionId);

  if (playerActionId === "charge") return choosePunishAction(legal);
  if (playerActionId === "defend") {
    if (canChoose(legal, "dragon")) return "dragon";
    if (canChoose(legal, "wukongClone") && enemy.fireClones < 2) return "wukongClone";
    return canChoose(legal, "charge") ? "charge" : pickRandom(legal);
  }
  if (playerActionId === "stealth") {
    if (canChoose(legal, "ultimate")) return "ultimate";
    return choosePunishAction(legal);
  }
  if (playerActionId === "ultimate") {
    if (canChoose(legal, "wukongUltimate")) return "wukongUltimate";
    if (canChoose(legal, "ultimate")) return "ultimate";
    if (canChoose(legal, "defend")) return "defend";
  }

  const counter = chooseHigherLevelAttack(legal, getAttackLevel(playerAction));
  if (counter) return counter;
  if (playerAction.isAttack && canChoose(legal, "defend")) return "defend";
  if (playerAction.isAttack && canChoose(legal, "dodge")) return "dodge";
  return chooseSmartEnemyAction(legal);
}

function chooseSmartDragonAction(legal) {
  const enemy = game.enemy;

  if (canChoose(legal, "dragon") && (game.player.hp <= getExpectedDamage("dragon") || enemy.eggs >= 3)) return "dragon";
  if (canChoose(legal, "ultimate") && enemy.eggs >= 4 && game.player.hp > 2) return "ultimate";
  if (canChoose(legal, "stealth") && enemy.stealthTurns <= 0 && (enemy.hp <= 3 || enemy.eggs >= 2)) return "stealth";
  if (canChoose(legal, "taunt") && game.player.tauntStreak < 2 && Math.random() < 0.42) return "taunt";
  if (enemy.eggs < 2 && canChoose(legal, "charge")) return "charge";
  return chooseBestAttack(legal) || (canChoose(legal, "charge") ? "charge" : pickRandom(legal));
}

function chooseSmartWukongAction(legal) {
  const enemy = game.enemy;

  if (canChoose(legal, "wukongUltimate") && (game.player.hp <= getExpectedDamage("wukongUltimate") || enemy.hp <= 3)) return "wukongUltimate";
  if (canChoose(legal, "wukongTurn") && (game.player.hp <= getExpectedDamage("wukongTurn") || enemy.fireClones > 0)) return "wukongTurn";
  if (canChoose(legal, "wukongClone") && enemy.fireClones < 2 && enemy.eggs >= 1) return "wukongClone";
  if (canChoose(legal, "taunt") && game.player.tauntStreak < 2 && Math.random() < 0.35) return "taunt";
  if (enemy.eggs < 2 && canChoose(legal, "charge")) return "charge";
  return chooseBestAttack(legal) || (canChoose(legal, "charge") ? "charge" : pickRandom(legal));
}

function choosePunishAction(legal) {
  return chooseBestAttack(legal, { allowUltimate: true }) || (canChoose(legal, "wukongClone") ? "wukongClone" : "charge");
}

function chooseAntiShunlongshaAction(legal) {
  if (canChoose(legal, "wukongUltimate")) return "wukongUltimate";
  if (canChoose(legal, "defend")) return "defend";
  return choosePunishAction(legal);
}

function chooseLethalAction(legal) {
  return chooseBestAttack(legal, { lethalOnly: true, allowUltimate: true });
}

function chooseHigherLevelAttack(legal, playerLevel) {
  const candidates = getAttackCandidates(legal, { allowUltimate: true })
    .filter((id) => getAttackLevel(getAction(game.enemy, id)) > playerLevel)
    .sort((a, b) => getExpectedDamage(b) - getExpectedDamage(a));
  return candidates[0] || null;
}

function chooseBestAttack(legal, options = {}) {
  const candidates = getAttackCandidates(legal, options)
    .filter((id) => !options.lethalOnly || canMeaningfullyDamagePlayer(id))
    .sort((a, b) => getExpectedDamage(b) - getExpectedDamage(a));
  return candidates[0] || null;
}

function getAttackCandidates(legal, options = {}) {
  const attackIds = ["attack", "taunt", "dragon", "wukongTurn", "wukongUltimate"];
  if (options.allowUltimate) attackIds.push("ultimate");
  return attackIds.filter((id) => canChoose(legal, id));
}

function canMeaningfullyDamagePlayer(actionId) {
  if (game.player.stealthTurns > 0 && actionId !== "ultimate") return false;
  if (game.player.fireClones > 0 && actionId !== "ultimate") return false;
  return getExpectedDamage(actionId) >= game.player.hp;
}

function getExpectedDamage(actionId) {
  const enemy = game.enemy;
  const baseDamage = {
    attack: 1,
    taunt: 1,
    dragon: 3,
    wukongTurn: 2,
    wukongUltimate: 3,
    ultimate: 4,
  }[actionId] || 0;
  const stealthBonus = enemy.stealthTurns > 0 && ["attack", "taunt", "dragon"].includes(actionId) ? 1 : 0;
  const cloneBonus = enemy.heroId === "wukong" && ["wukongTurn", "wukongUltimate"].includes(actionId) ? enemy.fireClones : 0;
  return baseDamage + stealthBonus + cloneBonus;
}

function canChoose(legal, actionId) {
  return legal.includes(actionId);
}

function playRound(playerActionId) {
  if (game.over) return;

  const enemyActionId = chooseEnemyAction(playerActionId);
  const playerAction = getAction(game.player, playerActionId);
  const enemyAction = getAction(game.enemy, enemyActionId);
  const result = resolveRound(playerAction, enemyAction);

  game.log.unshift(...result.logs.reverse());
  game.round += 1;
  game.lastRoundActions = result.actions;
  game.selectedAction = null;

  checkWinner();
  render();
  flashHitStates(result.damaged);
}

function resolveRound(playerAction, enemyAction) {
  const logs = [];
  const damaged = new Set();
  const player = game.player;
  const enemy = game.enemy;
  const startStealth = {
    player: player.stealthTurns > 0,
    enemy: enemy.stealthTurns > 0,
  };
  const newlyStealthed = new Set();
  const successfulTaunts = new Set();
  const previousPending = {
    player: player.pendingUltimate,
    enemy: enemy.pendingUltimate,
  };

  player.untargetable = false;
  enemy.untargetable = false;
  player.pendingUltimate = false;
  enemy.pendingUltimate = false;

  playerAction = applyForcedAction(player, playerAction, logs);
  enemyAction = applyForcedAction(enemy, enemyAction, logs);

  player.lastAction = playerAction.id;
  enemy.lastAction = enemyAction.id;

  logs.push(`第${game.round}回合：你使用【${playerAction.name}】，电脑使用【${enemyAction.name}】。`);

  payCost(player, playerAction, logs);
  payCost(enemy, enemyAction, logs);

  if (playerAction.id === "charge") charge(player, logs);
  if (enemyAction.id === "charge") charge(enemy, logs);

  applySetupAction(player, playerAction, newlyStealthed, logs);
  applySetupAction(enemy, enemyAction, newlyStealthed, logs);

  const attacks = [];
  if (previousPending.player) attacks.push(createUltimateAttack(player, enemy));
  if (previousPending.enemy) attacks.push(createUltimateAttack(enemy, player));

  addCurrentAttack(attacks, player, enemy, playerAction, startStealth.player, logs);
  addCurrentAttack(attacks, enemy, player, enemyAction, startStealth.enemy, logs);
  removeUntargetableBlockedAttacks(attacks, logs);
  settleAttackLevels(attacks, logs);
  removeClashOnlyAttacks(attacks);

  resolveAttacks(attacks, player, playerAction, logs, damaged, successfulTaunts);
  resolveAttacks(attacks, enemy, enemyAction, logs, damaged, successfulTaunts);

  updateTauntStreak(player, successfulTaunts);
  updateTauntStreak(enemy, successfulTaunts);
  tickStealth(player, newlyStealthed, logs);
  tickStealth(enemy, newlyStealthed, logs);
  player.untargetable = false;
  enemy.untargetable = false;

  return {
    logs,
    damaged,
    actions: {
      player: playerAction.name,
      enemy: enemyAction.name,
    },
  };
}

function applyForcedAction(actor, action, logs) {
  if (!actor.forcedCharge) return action;
  actor.forcedCharge = false;
  if (action.id !== "charge") {
    logs.push(`${actor.displayName}被挑控制，本回合动作改为【加蛋】。`);
  }
  return getAction(actor, "charge");
}

function payCost(actor, action, logs) {
  const cost = getEffectiveCost(actor, action);
  if (actor.heroId === "wukong" && action.id === "dodge" && actor.freeDodgeAvailable) {
    actor.freeDodgeAvailable = false;
    logs.push(`${actor.displayName}触发被动，本次【${action.name}】不消耗蛋。`);
    return;
  }
  if (!cost) return;
  actor.eggs = Math.max(0, actor.eggs - cost);
  logs.push(`${actor.displayName}消耗${cost}颗蛋发动【${action.name}】。`);
}

function charge(actor, logs) {
  actor.eggs += 1;
  logs.push(`${actor.displayName}加蛋成功，蛋数变为${actor.eggs}。`);
}

function applySetupAction(actor, action, newlyStealthed, logs) {
  if (actor.heroId === "wukong" && action.id === "dodge") {
    const before = actor.hp;
    actor.hp = Math.min(getMaxHp(actor), actor.hp + 1);
    logs.push(`${actor.displayName}使用【烈焰闪】，闪避攻击并回复${actor.hp > before ? 1 : 0}血。`);
  }

  if (actor.heroId === "wukong" && action.id === "wukongClone") {
    actor.fireClones = Math.min(2, actor.fireClones + 1);
    logs.push(`${actor.displayName}凝出【火分身】，当前${actor.fireClones}层。`);
  }

  if (actor.heroId === "wukong" && action.id === "wukongUltimate") {
    actor.untargetable = true;
    actor.freeDodgeAvailable = true;
    logs.push(`${actor.displayName}发动【火魔斩】，本回合无法被选中，并刷新免费【烈焰闪】。`);
  }

  if (action.id === "stealth") {
    actor.stealthTurns = STEALTH_DURATION;
    newlyStealthed.add(actor.id);
    logs.push(`${actor.displayName}进入暗隐状态。`);
  }

  if (action.id === "ultimate") {
    actor.pendingUltimate = true;
    actor.stealthTurns = STEALTH_DURATION;
    newlyStealthed.add(actor.id);
    logs.push(`${actor.displayName}蓄起【瞬龙杀】，下回合爆发真伤，并进入暗隐。`);
  }
}

function addCurrentAttack(attacks, source, target, action, hadStealth, logs) {
  if (action.id === "dodge") {
    if (source.heroId === "wukong") return;

    attacks.push({
      source,
      target,
      name: "飞镖",
      damage: 1,
      level: getAttackLevel(action),
      canBlock: true,
      taunt: false,
      breaksDefense: false,
      ultimate: false,
    });
    logs.push(`${source.displayName}闪身投出【飞镖】，若命中将造成1点伤害。`);
    return;
  }

  if (action.id === "wukongUltimate") {
    attacks.push({
      source,
      target,
      name: "火魔斩",
      damage: 3,
      level: getAttackLevel(action),
      canBlock: true,
      taunt: false,
      breaksDefense: false,
      ultimate: true,
      canUseCloneBoost: true,
    });
    return;
  }

  if (action.id === "ultimate") {
    attacks.push({
      source,
      target,
      name: "瞬龙杀蓄势",
      damage: 0,
      level: getAttackLevel(action),
      canBlock: false,
      taunt: false,
      breaksDefense: false,
      clashOnly: true,
      ultimate: true,
    });
    return;
  }

  if (!action.isAttack) return;

  let stealthBonus = 0;
  if (hadStealth && source.stealthTurns > 0) {
    stealthBonus = 1;
    source.stealthTurns = 0;
    logs.push(`${source.displayName}主动攻击破隐，若命中则伤害+1。`);
  }

  if (action.id === "attack") {
    attacks.push({
      source,
      target,
      name: "平A",
      damage: 1 + stealthBonus,
      level: getAttackLevel(action),
      canBlock: true,
      taunt: false,
      breaksDefense: false,
      ultimate: false,
    });
  }

  if (action.id === "taunt") {
    attacks.push({
      source,
      target,
      name: "挑",
      damage: 1 + stealthBonus,
      level: getAttackLevel(action),
      canBlock: true,
      taunt: true,
      breaksDefense: false,
      ultimate: false,
    });
  }

  if (action.id === "dragon") {
    attacks.push({
      source,
      target,
      name: "落龙刺",
      damage: 3 + stealthBonus,
      level: getAttackLevel(action),
      canBlock: true,
      taunt: false,
      breaksDefense: true,
      ultimate: false,
    });
  }

  if (action.id === "wukongTurn") {
    attacks.push({
      source,
      target,
      name: "转",
      damage: 2,
      level: getAttackLevel(action),
      canBlock: true,
      taunt: false,
      breaksDefense: false,
      ultimate: false,
      canUseCloneBoost: true,
    });
  }
}

function createUltimateAttack(source, target) {
  return {
    source,
    target,
    name: "瞬龙杀",
    damage: 4,
    level: ULTIMATE_ATTACK_LEVEL,
    canBlock: false,
    taunt: false,
    breaksDefense: true,
    defensePierce: true,
    tracking: true,
    piercesShield: true,
    piercesStealth: true,
    undodgeable: true,
    ultimate: true,
  };
}

function getAttackLevel(action) {
  if (action.id === "ultimate" || action.id === "wukongUltimate") return ULTIMATE_ATTACK_LEVEL;
  if (action.id === "dodge") return action.cost;
  if (action.isAttack) return action.cost;
  return -1;
}

function removeUntargetableBlockedAttacks(attacks, logs) {
  const blocked = attacks.filter((attack) => attack.target.untargetable);
  if (!blocked.length) return;

  blocked.forEach((attack) => {
    logs.push(`${attack.target.displayName}处于无法选中状态，避开了${describeAttackNames([attack])}。`);
  });

  const remaining = attacks.filter((attack) => !attack.target.untargetable);
  attacks.splice(0, attacks.length, ...remaining);
}

function settleAttackLevels(attacks, logs) {
  const playerAttacks = attacks.filter((attack) => attack.source.id === "player");
  const enemyAttacks = attacks.filter((attack) => attack.source.id === "enemy");
  if (!playerAttacks.length || !enemyAttacks.length) return;

  const playerLevel = Math.max(...playerAttacks.map((attack) => attack.level));
  const enemyLevel = Math.max(...enemyAttacks.map((attack) => attack.level));

  if (playerLevel === enemyLevel) {
    logs.push(`双方攻击等级相同（${describeAttackLevel(playerLevel)}），本轮攻击互相平掉。`);
    attacks.splice(0, attacks.length);
    return;
  }

  const playerWins = playerLevel > enemyLevel;
  const winner = playerWins ? playerAttacks : enemyAttacks;
  const loser = playerWins ? enemyAttacks : playerAttacks;
  const loserId = playerWins ? "enemy" : "player";
  const winnerName = winner[0].source.displayName;
  const loserName = loser[0].source.displayName;

  logs.push(`${winnerName}的${describeAttackNames(winner)}攻击等级更高，压过${loserName}的${describeAttackNames(loser)}。`);

  const remaining = attacks.filter((attack) => attack.source.id !== loserId);
  attacks.splice(0, attacks.length, ...remaining);
}

function removeClashOnlyAttacks(attacks) {
  const remaining = attacks.filter((attack) => !attack.clashOnly);
  attacks.splice(0, attacks.length, ...remaining);
}

function describeAttackLevel(level) {
  return level === ULTIMATE_ATTACK_LEVEL ? "大招" : `${level}蛋`;
}

function describeAttackNames(attacks) {
  return attacks.map((attack) => `【${attack.name}】`).join("和");
}

function resolveAttacks(attacks, target, targetAction, logs, damaged, successfulTaunts) {
  let incoming = attacks.filter((attack) => attack.target.id === target.id);
  if (!incoming.length) return;

  if (targetAction.id === "dodge") {
    const dodgedAttacks = incoming.filter((attack) => !attack.undodgeable);
    const unavoidableAttacks = incoming.filter((attack) => attack.undodgeable);

    if (dodgedAttacks.length) {
      logs.push(`${target.displayName}使用【${targetAction.name}】，躲开了${describeAttackNames(dodgedAttacks)}。`);
    }

    if (!unavoidableAttacks.length) return;

    logs.push(`${describeAttackNames(unavoidableAttacks)}是追踪真伤，无法被【${targetAction.name}】躲开。`);
    incoming = unavoidableAttacks;
  }

  let stealthAvailable = target.stealthTurns > 0 && !targetAction.isAttack;

  incoming.forEach((attack) => {
    if (targetAction.id === "defend" && !target.defenseBroken) {
      if (attack.defensePierce) {
        target.defenseBroken = true;
        applyDamage(target, 2, logs, damaged, "防御被【瞬龙杀】碎掉，仍受到2点伤害");
        return;
      }

      if (attack.breaksDefense) {
        target.defenseBroken = true;
        logs.push(`${target.displayName}的防御被【${attack.name}】碎掉，但没有受到伤害。`);
        return;
      }

      if (attack.canBlock) {
        logs.push(`${target.displayName}防住了【${attack.name}】。`);
        return;
      }
    }

    if (stealthAvailable && !attack.piercesStealth) {
      stealthAvailable = false;
      target.stealthTurns = 0;
      logs.push(`${target.displayName}被【${attack.name}】打中暗隐，破隐并免疫这次攻击。`);
      return;
    }

    if (stealthAvailable && attack.piercesStealth) {
      stealthAvailable = false;
      target.stealthTurns = 0;
      logs.push(`【${attack.name}】追踪到${target.displayName}，穿透暗隐并破隐。`);
    }

    if (target.fireClones > 0 && attack.damage > 0 && attack.piercesShield) {
      logs.push(`【${attack.name}】是真实伤害，穿透${target.displayName}的【火分身】。`);
    } else if (target.fireClones > 0 && attack.damage > 0) {
      target.fireClones -= 1;
      logs.push(`${target.displayName}的【火分身】抵挡了【${attack.name}】，剩余${target.fireClones}层。`);
      return;
    }

    let damage = attack.damage;
    const boost = getCloneBoostAfterHit(attack, target);
    if (boost > 0) {
      attack.source.fireClones -= boost;
      damage += boost;
      logs.push(`${attack.source.displayName}消耗${boost}层【火分身】，【${attack.name}】伤害+${boost}。`);
    }

    applyDamage(target, damage, logs, damaged, `受到【${attack.name}】`);

    if (attack.taunt && target.hp > 0) {
      if (target.tauntStreak < 2) {
        target.forcedCharge = true;
        successfulTaunts.add(target.id);
        logs.push(`${target.displayName}被【挑】命中，下回合必须【加蛋】。`);
      } else {
        logs.push(`${target.displayName}已连续被挑两回合，本次只扣血不再控制。`);
      }
    }
  });
}

function getCloneBoostAfterHit(attack, target) {
  if (!attack.canUseCloneBoost || attack.source.fireClones <= 0) return 0;

  const available = attack.source.fireClones;
  if (attack.source.id === "player") {
    if (typeof window === "undefined" || typeof window.confirm !== "function") return 0;
    const ok = window.confirm(`【${attack.name}】已命中。是否消耗${available}层火分身，使本次伤害+${available}？`);
    return ok ? available : 0;
  }

  return target.hp <= attack.damage + available || Math.random() < 0.55 ? available : 0;
}

function applyDamage(target, amount, logs, damaged, reason) {
  target.hp = Math.max(0, target.hp - amount);
  damaged.add(target.id);
  logs.push(`${target.displayName}${reason}，扣${amount}血。`);
}

function updateTauntStreak(actor, successfulTaunts) {
  if (successfulTaunts.has(actor.id)) {
    actor.tauntStreak += 1;
  } else {
    actor.tauntStreak = 0;
  }
}

function tickStealth(actor, newlyStealthed, logs) {
  if (actor.stealthTurns <= 0) return;
  if (newlyStealthed.has(actor.id)) return;

  actor.stealthTurns -= 1;
  if (actor.stealthTurns === 0) {
    logs.push(`${actor.displayName}的暗隐自然结束。`);
  }
}

function checkWinner() {
  const { player, enemy } = game;
  if (player.hp > 0 && enemy.hp > 0) return;

  game.over = true;
  if (player.hp <= 0 && enemy.hp <= 0) {
    game.log.unshift("双方同时倒下，平局。");
    dom.roundHint.textContent = "平局，随时可以重开。";
    return;
  }

  if (enemy.hp <= 0) {
    game.log.unshift("你赢了！暗隐收刀。");
    dom.roundHint.textContent = "胜利，随时可以重开。";
    return;
  }

  game.log.unshift("电脑赢了。下一把可以更凶一点。");
  dom.roundHint.textContent = "失败，随时可以重开。";
}

function render() {
  renderFighter(game.player, {
    card: dom.playerCard,
    hpText: dom.playerHpText,
    hpBar: dom.playerHpBar,
    eggs: dom.playerEggs,
    eggTray: dom.playerEggTray,
    statuses: dom.playerStatuses,
    intent: dom.playerIntent,
  });

  renderFighter(game.enemy, {
    card: dom.enemyCard,
    hpText: dom.enemyHpText,
    hpBar: dom.enemyHpBar,
    eggs: dom.enemyEggs,
    eggTray: dom.enemyEggTray,
    statuses: dom.enemyStatuses,
    intent: dom.enemyIntent,
  });

  dom.roundNumber.textContent = game.round;
  dom.controlTitle.textContent = game.player.forcedCharge ? "被挑控制：本回合必须加蛋" : "选择本回合动作";
  dom.characterName.textContent = getHero(game.player.heroId).name;
  renderActionResult();
  dom.cloneBoostToggle.hidden = true;
  dom.cloneBoostToggle.classList.remove("is-active");
  dom.cloneBoostToggle.setAttribute("aria-pressed", "false");
  dom.cloneBoostToggle.textContent = "命中后选择加伤";

  if (!game.over) {
    dom.roundHint.textContent = game.player.pendingUltimate
      ? "你的瞬龙杀将在本回合落下。"
      : "双方同时出招，电脑会自动选择。";
  }

  renderActions();
  renderLog();
}

function renderActionResult() {
  const pendingName = game.selectedAction ? getAction(game.player, game.selectedAction).name : "等待出招";
  dom.playerActionResult.textContent = game.lastRoundActions?.player || pendingName;
  dom.enemyActionResult.textContent = game.lastRoundActions?.enemy || "等待出招";
  dom.selectedAction.classList.toggle("has-result", Boolean(game.lastRoundActions));
}

function renderFighter(actor, elements) {
  const hero = getHero(actor.heroId);
  elements.hpText.textContent = actor.hp;
  elements.eggs.textContent = actor.eggs;
  elements.hpBar.innerHTML = "";
  elements.eggTray.innerHTML = "";
  elements.statuses.innerHTML = "";
  elements.intent.textContent = getIntentLabel(actor);

  elements.card.dataset.hero = actor.heroId;
  elements.card.style.setProperty("--avatar-image", `url("${hero.avatar}")`);
  elements.card.classList.toggle("stealthed", actor.stealthTurns > 0);
  elements.card.classList.toggle("untargetable", actor.untargetable);
  elements.card.classList.toggle("defending", actor.lastAction === "defend" && !actor.defenseBroken);
  const art = elements.card.querySelector(".character-art");
  if (art) {
    art.dataset.normalSrc = hero.normalArt;
    art.dataset.stealthSrc = hero.stealthArt;
    art.src = actor.stealthTurns > 0 ? art.dataset.stealthSrc : art.dataset.normalSrc;
  }

  renderHpResource(elements.hpBar, actor.hp, getMaxHp(actor));
  renderEggResource(elements.eggTray, actor.eggs);

  const statuses = getStatuses(actor);
  if (!statuses.length) {
    addStatus(elements.statuses, "无状态");
  } else {
    statuses.forEach((status) => addStatus(elements.statuses, status.label, status.kind));
  }
}

function renderHpResource(container, current, max) {
  if (current > COMPACT_RESOURCE_THRESHOLD || max > COMPACT_RESOURCE_THRESHOLD) {
    addResourceCount(container, current, "blood-drop");
    return;
  }

  for (let index = 0; index < max; index += 1) {
    const drop = document.createElement("span");
    drop.className = `blood-drop${index >= current ? " empty" : ""}`;
    container.appendChild(drop);
  }
}

function renderEggResource(container, count) {
  if (count >= COMPACT_RESOURCE_THRESHOLD) {
    addResourceCount(container, count, "egg");
    return;
  }

  for (let index = 0; index < count; index += 1) {
    const egg = document.createElement("span");
    egg.className = "egg";
    container.appendChild(egg);
  }
}

function addResourceCount(container, count, iconClass) {
  const counter = document.createElement("span");
  counter.className = `resource-count resource-count-${iconClass}`;

  const number = document.createElement("strong");
  number.textContent = count;

  const icon = document.createElement("span");
  icon.className = iconClass;

  counter.append(number, icon);
  container.appendChild(counter);
}

function getStatuses(actor) {
  const statuses = [];
  if (actor.stealthTurns > 0) statuses.push({ label: `暗隐${actor.stealthTurns}`, kind: "stealth" });
  if (actor.pendingUltimate) statuses.push({ label: "瞬龙杀蓄势", kind: "gold" });
  if (actor.fireClones > 0) statuses.push({ label: `火分身${actor.fireClones}`, kind: "gold" });
  if (actor.freeDodgeAvailable) statuses.push({ label: "免费烈焰闪", kind: "gold" });
  if (actor.untargetable) statuses.push({ label: "无法选中", kind: "stealth" });
  if (actor.defenseBroken) statuses.push({ label: "已碎防", kind: "danger" });
  if (actor.forcedCharge) statuses.push({ label: "被挑控制", kind: "danger" });
  if (actor.tauntStreak > 0) statuses.push({ label: `连续被挑${actor.tauntStreak}`, kind: "gold" });
  return statuses;
}

function addStatus(container, label, kind = "") {
  const chip = document.createElement("span");
  chip.className = `status-chip ${kind}`.trim();
  chip.textContent = label;
  container.appendChild(chip);
}

function getIntentLabel(actor) {
  if (game.over) return actor.hp > 0 ? "存活" : "倒下";
  if (!actor.lastAction) return actor.id === "player" ? "待出招" : "暗中观察";
  return getAction(actor, actor.lastAction).name;
}

function renderLog() {
  dom.battleLog.innerHTML = "";
  game.log.slice(0, 28).forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    dom.battleLog.appendChild(item);
  });
}

function flashHitStates(damaged) {
  [
    [game.player, dom.playerCard],
    [game.enemy, dom.enemyCard],
  ].forEach(([actor, card]) => {
    card.classList.remove("hit");
    if (!damaged.has(actor.id)) return;
    requestAnimationFrame(() => {
      card.classList.add("hit");
    });
  });
}

function pickRandom(items) {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

dom.resetBtn.addEventListener("click", () => {
  game = createGame(selectedHeroId);
  render();
});

dom.characterSelect.addEventListener("click", (event) => {
  const aiButton = event.target.closest("[data-ai]");
  if (aiButton) {
    selectedAiLevel = aiButton.dataset.ai;
    updateActiveAiDifficulty();
    return;
  }

  const button = event.target.closest("[data-hero]");
  if (!button) return;
  selectedHeroId = button.dataset.hero;
  game = createGame(selectedHeroId);
  dom.characterSelect.classList.add("is-hidden");
  render();
});

dom.clearLogBtn.addEventListener("click", () => {
  game.log = [];
  renderLog();
});

function updateActiveAiDifficulty() {
  dom.aiDifficultyOptions.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.ai === selectedAiLevel);
  });
}

game = createGame(selectedHeroId);
updateActiveAiDifficulty();
render();
