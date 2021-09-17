---
title: '[LeetCode] 198. House Robber'
date: '2020-05-15T11:06:23+09:00'
tags: [Algorithm, LeetCode, Dynamic Programming]
published: true
---

# Problem

> You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.  
> Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
>
> 당신은 길을 따라 집을 털려는 전문 강도이다. 각 주택은 일정 금액의 돈을 숨겨두고 있는데, 각 주택을 털지 못하게 하는 유일한 제약은 인접한 주택에 보안 시스템이 연결되어 있고 같은 날 밤 인접한 두 집을 침입하면 자동으로 경찰에 연락한다는 것이다.  
> 각 집의 돈의 양을 나타내는 음수가 아닌 정수 목록을 고려할 때, 경찰에 알리지 않고 오늘 밤 강도를 할 수 있는 최대 금액을 결정해라.

```
Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
```

# Solution

1. 예외 사례 1: 배열의 길이가 0이면 훔칠 것이 없으므로 0을 반환한다.
2. 예외 사례 2: 배열의 길이가 1이면 첫번째 집만 털게 되므로 첫번째 요소를 반환한다.
3. 변수 2개를 생성해서 prev_max에는 첫번째 요소를, curr_max에는 첫번째와 두번째 요소 중 큰 값을 저장한다.
4. 이후 반복문에서 max_val을 `max(nums[i] + prev_max, curr_max)`로 변경하는데, 이는 만약 현재 집이 선택되었다면 이전 집은 선택되지 못하고, 현재 집이 선택되지 않았다면 이전 집은 선택될 수 있음을 의미한다. 즉, 현재 집을 선택하려면 prev_max에 현재 집의 돈의 양인 nums[i]를 더한 nums[i] + prev_max가 현재 시점에서의 최대 금액이 되며, 현재 집을 훔치지 않겠다면 직전까지의 최대값인 curr_max를 현재 시점에서의 최대 금액으로 설정하면 되는 것이다.
5. 이번 회차의 curr_max를 prev_max로 지정하고, curr_max는 현재 시점에 새롭게 계산된 max_val로 변경한다.

시간 복잡도 $O(N)$  
공간 복잡도 $O(1)$

```py
def rob(nums):
    n = len(nums)
    if n == 0:
        return 0
    if n == 1:
        return nums[0]
    max_val = None
    prev_max, curr_max = nums[0], max(nums[0], nums[1])
    for i in range(2, n):
        max_val = max(nums[i] + prev_max, curr_max)
        prev_max, curr_max = curr_max, max_val
    return max_val


if __name__ == '__main__':
    print(rob([1, 2, 3, 1]))
    print(rob([2, 7, 9, 3, 1]))
```