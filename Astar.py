
def AStar(DoThi, h , cost ,start, end):
    L = []
    F = {}
    LS = {start:0}
    path = {start:[]}
    L.append(start)
    while L :
       DinhDangXet =  L.pop(0)
       del LS[DinhDangXet]
       if DinhDangXet != end:
           for DinhKe in DoThi[DinhDangXet]:
                g = cost[DinhDangXet][DinhKe]
                if DinhDangXet in path and len(path[DinhDangXet]) > 0:
                    for i in range(len(path[DinhDangXet])): 
                        if i < len(path[DinhDangXet]) - 1:
                            g += cost[path[DinhDangXet][i]][path[DinhDangXet][i + 1]]
                        else:
                            g += cost[path[DinhDangXet][i]][DinhDangXet]
                f = h[DinhKe] + g
                if DinhKe not in path or f < F[DinhKe]:
                    F[DinhKe] = f
                    LS[DinhKe] = f
                    path[DinhKe] = path[DinhDangXet] + [DinhDangXet]
                    L = sorted(LS, key=lambda x: LS[x])
       else:
            return path[DinhDangXet] + [DinhDangXet], F[DinhDangXet], path
    return None


DoThi = {
    'A': ['B', 'C', 'D'],
    'B': ['E', 'F'],
    'C': ['I'],
    'D': ['F', 'I', 'J'],
    'E': ['C', 'G'],
    'F': ['G', 'H', 'I'],
    'G': ['K'],
    'H': ['K'],
    'I': ['H', 'J'],
    'J': ['H', 'K'],
    'K': [],
}

h = {'A': 10, 'B': 12, 'C': 14, 'D': 6, 'E': 8, 'F': 7, 'G': 5, 'H': 3, 'I': 6, 'J': 8, 'K': 0}

cost = {
    'A': {'B': 7, 'C': 6, 'D': 10},
    'B': {'E': 3, 'F': 4},
    'C': {'I': 7},
    'D': {'F': 11, 'I': 4, 'J': 11},
    'E': {'C': 9, 'G': 4},
    'F': {'G': 8, 'H': 6, 'I': 1},
    'G': {'K': 10},
    'H': {'K': 6},
    'I': {'H': 2, 'J': 3},
    'J': {'H': 7, 'K': 9},
    'K': {'K': 0},
}

start = 'A'
end = 'K'

DuongDi, ChiPhi, path = AStar(DoThi, h, cost, start, end)

if DuongDi:
    print(f'Tìm thấy đường đi từ {start} đến {end}: {DuongDi} --> Chi phí {ChiPhi}')
    print(f'Đường dẫn: {path}')
else:
    print(f'Không tìm thấy đường đi từ {start} đến {end}')
