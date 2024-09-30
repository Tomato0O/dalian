<!-- 全局头部实现的导航栏功能 -->
<template>
    <el-container>
        <!-- flex-grow同级元素会按比例分配空间 -->
        <span style="flex-grow:30;"></span>
        <el-menu mode="horizontal" style="width:auto;flex-grow: 2;" :default-active="'0'" ellipsis=false>

            <!-- index.vue -->
            <el-menu-item index="0">
                <RouterLink to="/">
                    <el-icon>
                        <House />
                    </el-icon>
                    <span>首页</span>
                </RouterLink>
            </el-menu-item>

            <!-- bridgepage.vue -->
            <el-menu-item index="1">
                <RouterLink to="/bridge">
                    <el-icon>
                        <Sunny />
                    </el-icon>
                    <span>跨海大桥</span>
                </RouterLink>
            </el-menu-item>

            <!-- 海域页 -->
            <el-menu-item index="2">
                <RouterLink to="/sea">
                    <el-icon>
                        <MoonNight />
                    </el-icon>
                    <span>大连海域</span>
                </RouterLink>
            </el-menu-item>

            <!-- 足球页 -->
            <el-menu-item index="3">
                <RouterLink to="/football">
                    <el-icon>
                        <Soccer />
                    </el-icon>
                    <span>足球</span>
                </RouterLink>
            </el-menu-item>
        </el-menu>
    </el-container>
</template>

<style>
a {
    text-decoration: none;
}
</style>

<script setup>
</script>