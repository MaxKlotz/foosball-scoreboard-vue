<template>
  <div class="tournament">
    <!-- tournament logo -->
    <div class="tournament__logo-container tournament__logo-container--right">
      <strong class="tournament__logo tournament__logo--gold"></strong>
    </div>
    <div class="tournament__grid">
      <!-- tournament__round 1/8 -->
      <div class="tournament__round tournament__round--first-round">
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
      </div>

      <div class="tournament__round tournament__round--first-round">
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
      </div>

      <!-- tournament__round 1/2 -->
      <div class="tournament__round">
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
      </div>

      <!-- tournament__round final -->
      <div class="tournament__round tournament__round--final">
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
      </div>

      <!-- tournament__round winner -->
      <div class="tournament__round tournament__round--winner">
        <div class="tournament__match">
          <a class="tournament__match__team" href="#">Lorem ipsum.</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  background: #383738;
}

/* $tournament-grid-line-color: rgba(#000, 0.2);
$tournament-grid-comand-height: 32px;
$tournament-grid-comand-width: auto;
$tournament-grid-comand-bd-color: rgba(#000, 0.2);
$team-icon-spacing: 36px;
$tournament-round-width: $tournament-grid-comand-width;
$tournament-match-min-height: 100px; */

.tournament {
  position: relative;
  min-height: 300px;
  padding: 30px 0 0;
}

.tournament__grid {
  font-size: 0;
  line-height: 0;
  display: flex;
  align-items: stretch;
  min-height: 400px;
}

.tournament__round {
  position: relative;
  flex: 1 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.tournament__match {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  align-items: center;
  min-height: $tournament-match-min-height;

  &:first-child {
    margin: 0 !important;
  }

  .tournament__round--first-round & {
    padding-left: 0;
  }

  .tournament__round--winner & {
    padding-right: 0;
    height: $tournament-grid-comand-height;
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 2px;
    background: $tournament-grid-line-color;
    top: 25%;
    bottom: 25%;

    .tournament__round--winner &,
    .tournament__round--end-point & {
      display: none;
    }
  }
}

.tournament__match__team {
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s ease;
  color: #ccc;
  text-decoration: none;

  &:focus,
  &:hover {
    color: #fff;
  }

  box-sizing: border-box;
  background: $tournament-grid-comand-bd-color;
  display: block;
  position: relative;
  width: $tournament-grid-comand-width;
  height: $tournament-grid-comand-height;
  line-height: $tournament-grid-comand-height;
  padding: 0 $team-icon-spacing 0 $team-icon-spacing;
  margin: auto;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 999px;
    height: 2px;
    margin-top: -1px;
    background: $tournament-grid-line-color;
  }

  &:after {
    left: 100%;

    .tournament__round:last-child &,
    .tournament__round--end-point & {
      display: none;
    }
  }

  &:before {
    right: 100%;

    .tournament__round:first-child & {
      display: none;
    }
  }
}
</style>
