#%% import and initialize

import gym
import matplotlib.pyplot as plt
import time
import torch

#%%
from gym.envs.registration import register
register(
    id='FrozenLakeNotSlippery-v0',
    entry_point='gym.envs.toy_text:FrozenLakeEnv',
    kwargs={'map_name' : '4x4', 'is_slippery': False}
)

#%%
env = gym.make('FrozenLakeNotSlippery-v0')

number_states = 
num_actions = 


num_episodes = 100
steps_total = []



#%% Run some episodes
for i in range(num_episodes):
    state = env.reset()
    step = 0

    while True:
        step += 1
        time.sleep(0.5)
        action = env.action_space.sample()
        new_state, reward, done, info = env.step(action)
        # Comment below to speed up simulations
        env.render()
        print(new_state)
        print(info)
        if done:
            steps_total.append(step)
            break



# %%
plt.plot(steps_total)
rand_avg = sum(steps_total)/num_episodes
print(rand_avg)
