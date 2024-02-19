<button class="btn" on:click={() => my_modal_1.showModal()}>show daisyui modal</button>
<dialog bind:this={my_modal_1} id="my_modal_1" class="modal">
  <div class="modal-box">
    {@html html}
    <Editor {html} on:change={(evt)=>html = evt.detail}/>

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


<button on:click={() => (showModal = true)}> show svelte modal </button>
<Modal bind:showModal>
    {@html html}
    <Editor {html} on:change={(evt)=>html = evt.detail}/>
</Modal>


{@html html}
<Editor {html} on:change={(evt)=>html = evt.detail}/>


<script lang="ts">
    import Modal from "$lib/Modal.svelte";

    let my_modal_1: HTMLDialogElement;
    let showModal = false;

    import Editor from "cl-editor/src/Editor.svelte"

    let html = '<div>try bold any word multiple times</div><p>try bold this paragraph multiple times</p>'
    let editor
</script>