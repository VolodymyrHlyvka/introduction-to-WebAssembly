async function loadAndInstantiateWasm() {
  const wasmModule = await WebAssembly.compileStreaming(fetch("release.wasm"));
  const imports = {
    env: {
        log: (i) => {
        console.log("log: " + i);
      },
    },
  };
  const instance = await WebAssembly.instantiate(wasmModule, imports);
  // You can now use the `instance` to call functions from your WebAssembly module.
}

loadAndInstantiateWasm();
