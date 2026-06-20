-- Script SQL para criação das tabelas no Supabase
-- Execute no SQL Editor do painel do Supabase

-- Tabelas fornecidas no documento original
CREATE TABLE cidades (
  id serial primary key,
  nome text
);

CREATE TABLE equipamentos (
  id serial primary key,
  nome text,
  setor text
);

-- Tabelas complementadas (funcionarios e servicos), conforme solicitado
CREATE TABLE funcionarios (
  id serial primary key,
  nome text,
  cargo text
);

CREATE TABLE servicos (
  id serial primary key,
  descricao text,
  status text
);
