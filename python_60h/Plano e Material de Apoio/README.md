# 🕹️ Exercícios com Respostas AULA 11 — Pygame

Aqui estão os **10 exercícios básicos com Pygame**, agora com **as soluções completas em Python**.

---

## 🧩 Exercício 1 — Criar uma Janela

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
pygame.display.set_caption("Meu Jogo")

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

pygame.quit()
```

---

## 🧩 Exercício 2 — Mudar a Cor do Fundo

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
pygame.display.set_caption("Cor de Fundo")

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    tela.fill((0, 128, 255))  # Azul
    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 3 — Desenhar Formas

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
pygame.display.set_caption("Desenhar Formas")

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    tela.fill((255, 255, 255))
    pygame.draw.rect(tela, (255, 0, 0), (50, 50, 100, 80))
    pygame.draw.circle(tela, (0, 255, 0), (320, 240), 50)
    pygame.draw.line(tela, (0, 0, 255), (0, 0), (640, 480), 5)

    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 4 — Quadrado Móvel

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
pygame.display.set_caption("Quadrado Móvel")

x, y = 300, 220
velocidade = 5

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]: x -= velocidade
    if teclas[pygame.K_RIGHT]: x += velocidade
    if teclas[pygame.K_UP]: y -= velocidade
    if teclas[pygame.K_DOWN]: y += velocidade

    tela.fill((0, 0, 0))
    pygame.draw.rect(tela, (255, 0, 0), (x, y, 50, 50))
    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 5 — Limitar Movimento

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
x, y = 300, 220
vel = 5

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT] and x > 0: x -= vel
    if teclas[pygame.K_RIGHT] and x < 590: x += vel
    if teclas[pygame.K_UP] and y > 0: y -= vel
    if teclas[pygame.K_DOWN] and y < 430: y += vel

    tela.fill((0, 0, 0))
    pygame.draw.rect(tela, (0, 255, 0), (x, y, 50, 50))
    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 6 — Colisão de Retângulos

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
player = pygame.Rect(100, 200, 50, 50)
bloco = pygame.Rect(400, 200, 50, 50)

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]: player.x -= 5
    if teclas[pygame.K_RIGHT]: player.x += 5

    tela.fill((255, 255, 255))
    pygame.draw.rect(tela, (255, 0, 0), player)
    pygame.draw.rect(tela, (0, 0, 255), bloco)

    if player.colliderect(bloco):
        pygame.display.set_caption("COLISÃO!")

    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 7 — Animação Automática

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
x, y = 320, 240
velx, vely = 3, 3

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    x += velx
    y += vely

    if x > 620 or x < 20:
        velx = -velx
    if y > 460 or y < 20:
        vely = -vely

    tela.fill((0, 0, 0))
    pygame.draw.circle(tela, (255, 255, 0), (x, y), 20)
    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 8 — Clique do Mouse

```python
import pygame

pygame.init()
tela = pygame.display.set_mode((640, 480))
pygame.display.set_caption("Clique do Mouse")

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False
        if evento.type == pygame.MOUSEBUTTONDOWN:
            pos = pygame.mouse.get_pos()
            print("Clique em:", pos)

    tela.fill((255, 255, 255))
    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 9 — Som ao Pressionar Tecla

```python
import pygame

pygame.init()
pygame.mixer.init()
som = pygame.mixer.Sound("som.wav")
tela = pygame.display.set_mode((640, 480))

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False
        if evento.type == pygame.KEYDOWN and evento.key == pygame.K_SPACE:
            som.play()

    tela.fill((200, 200, 200))
    pygame.display.update()

pygame.quit()
```

---

## 🧩 Exercício 10 — Jogo do Quadrado Vermelho

```python
import pygame, random

pygame.init()
tela = pygame.display.set_mode((640, 480))
pygame.display.set_caption("Jogo do Quadrado Vermelho")
fonte = pygame.font.Font(None, 36)

player = pygame.Rect(300, 220, 50, 50)
alvo = pygame.Rect(random.randint(0, 590), random.randint(0, 430), 50, 50)
pontos = 0

rodando = True
while rodando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            rodando = False

    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_LEFT]: player.x -= 5
    if teclas[pygame.K_RIGHT]: player.x += 5
    if teclas[pygame.K_UP]: player.y -= 5
    if teclas[pygame.K_DOWN]: player.y += 5

    if player.colliderect(alvo):
        pontos += 1
        alvo.x = random.randint(0, 590)
        alvo.y = random.randint(0, 430)

    tela.fill((0, 0, 0))
    pygame.draw.rect(tela, (255, 0, 0), player)
    pygame.draw.rect(tela, (0, 0, 255), alvo)
    texto = fonte.render(f"Pontos: {pontos}", True, (255, 255, 255))
    tela.blit(texto, (10, 10))
    pygame.display.update()

pygame.quit()
```
