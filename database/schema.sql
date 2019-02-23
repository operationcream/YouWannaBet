/* 
// I already added these to AWS RDS, these are just for reference, no action needed
*/

create table app_user (
  id_user serial primary key,
  username VARCHAR (50) UNIQUE NOT NULL,
  password VARCHAR (50) NOT NULL,
  points INTEGER
);

create table team (
  id_team serial primary key,
  team_name VARCHAR (50) UNIQUE NOT NULL,
  nba_id INTERGER UNIQUE NOT NULL,
  tri_code VARCHAR (50)
);

create table game (
  id_game serial primary key,
  game_date DATE NOT NULL,
  id_team_home INTEGER NOT NULL,
  id_team_away INTEGER NOT NULL,
  score_home INTEGER NOT NULL,
  score_away INTEGER NOT NULL,
  FOREIGN KEY (id_team_home) REFERENCES team(id_team),
  FOREIGN KEY (id_team_away) REFERENCES team(id_team)
);


create table bet (
  id_bet serial primary key,
  id_game INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  id_user_acceptor INTEGER NULL,
  id_user_poster INTEGER NOT NULL,
  date_created DATE NOT NULL DEFAULT CURRENT_DATE,
  FOREIGN KEY (id_game) REFERENCES game(id_game),
  FOREIGN KEY (id_user_acceptor) REFERENCES app_user(id_user),
  FOREIGN KEY (id_user_poster) REFERENCES app_user(id_user)
);

INSERT INTO app_user values(1,'testuser', 'testpassword', 10001);