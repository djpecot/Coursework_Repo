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

number_states = env.observation_space.n
num_actions = env.action_space.n
gamma = 1

num_episodes = 100
steps_total = []

Q = torch.zeros(number_states,num_actions)

#%% Run some episodes
for i in range(num_episodes):
    state = env.reset()
    step = 0

    while True:
        step += 1
        time.sleep(0.5)
        # Random action
        action = env.action_space.sample()

        # More intelligent?
        action = torch.max(Q[state],1)[1][0]


        new_state, reward, done, info = env.step(action)

Q[state,action] = reward + gamma * torch.max(Q[new_state])

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
