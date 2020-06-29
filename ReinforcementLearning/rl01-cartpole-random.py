#%% import and initialize

import gym
import matplotlib.pyplot as plt

#%%
env = gym.make('CartPole-v1')
num_episodes = 10000
steps_total = []

#%% Run some episodes
for i in range(num_episodes):
    state = env.reset()
    step = 0

    while True:
        step += 1
        action = env.action_space.sample()
        new_state, reward, done, info = env.step(action)
        # Comment below to speed up simulations
        # env.render()
        if done:
            steps_total.append(step)
            break



# %%
plt.plot(steps_total)
rand_avg = sum(steps_total)/num_episodes
print(rand_avg)

# %%
