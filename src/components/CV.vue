<template>
  <div>
    <div>canvas-datagrid test</div>
    <canvas-datagrid
      ref="canvas"
      :data.prop="testData"
      :schema.prop="schema"
      showRowHeaders="false"
      editable="false"
      selectionMode="row"
      hoverMode="row"
    ></canvas-datagrid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testData: [
        {
          name1: "column1",
          name2: "colunm2",
          name3: "column3",
          name4: "column4",
        },
        {
          name1: "column1",
          name2: "colunm2",
          name3: "column3",
          name4: "column4",
        },
        {
          name1: "column1",
          name2: "colunm2",
          name3: "column3",
          name4: "column4",
        },
        {
          name1: "column1",
          name2: "colunm2",
          name3: "column3",
          name4: "column4",
        },
        {
          name1: "column1",
          name2: "colunm2",
          name3: "column3",
          name4: "column4",
        },
        {
          name1: "column1",
          name2: "colunm2",
          name3: "column3",
          name4: "column4",
        },
      ],
      schema: [
        {
          name: "name1",
          title: "Title1",
          width: 180,
        },
        {
          name: "name2",
          title: "Title2",
          width: 200,
        },
        {
          name: "name3",
          title: "Title3",
          width: 290,
        },
        {
          name: "name4",
          title: "Title4",
          width: 130,
        },
      ],
    };
  },
  beforeDestroy() {
    this.$refs.canvas.dispose();
  },
};
</script>

<style></style>
