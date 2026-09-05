/* =====================================================
   WebBox — Resizer
   ===================================================== */

const Resizer = (() => {

   let editors;

   // declaraties
   const workspace      = document.querySelector('#workspace');
   const mainResizer    = document.querySelector('#main-resizer');
   const editorResizers = document.querySelectorAll('.resizer[data-axis]');
   const panes = [
      document.querySelector('#pane-html'),
      document.querySelector('#pane-css'),
      document.querySelector('#pane-js'),
   ];

   function mainResizerIsVertical() {
      return workspace.classList.contains('layout-stacked');
   }

   /**
    * Geeft de minimale grootte van een paneel terug.
    * Een dichtgeklapt paneel ligt via CSS vast op 30px en klemt dus niet mee:
    * anders zou het slepen meteen blokkeren zodra de buur dichtgeklapt is.
    *
    * @param {HTMLElement} pane - Het paneel
    * @param {number} min - De minimale grootte in pixels
    * @returns {number} het minimum, of 0 voor een dichtgeklapt paneel
    */
   function paneMinSize(pane, min) {
      const isCollapsed = pane.classList.contains('is-minimized') || pane.classList.contains('is-collapsed');

      return isCollapsed ? 0 : min;
   }

   /**
    * Maakt een sleepbare resizer tussen twee panelen.
    *
    * @param {HTMLElement} resizerEl   - Het resizer-element
    * @param {Function}    getA        - Geeft het eerste paneel terug
    * @param {Function}    getB        - Geeft het tweede paneel terug
    * @param {null}        getSize     - Ongebruikt, gereserveerd
    * @param {Function}    setSize     - Past de flex-grootte van beide panelen aan
    * @param {Function}    isVerticalFn - Geeft true terug als de richting verticaal is
    * @param {number}      minA        - Minimale grootte van het eerste paneel in pixels
    * @param {number}      minB        - Minimale grootte van het tweede paneel in pixels
    */
   function initResizer(resizerEl, getA, getB, getSize, setSize, isVerticalFn, minA = 80, minB = 80) {
      let startPos, startSizeA, startSizeB;

      function onMove(e) {
         const moved = (isVerticalFn() ? e.clientY : e.clientX) - startPos;

         // begrens de verplaatsing zodat geen van beide panelen onder zijn minimum zakt;
         // enkel paneel A krijgt een vaste grootte, dus B moet mee begrensd worden
         const lower = paneMinSize(getA(), minA) - startSizeA;
         const upper = startSizeB - paneMinSize(getB(), minB);
         const delta = Math.min(Math.max(moved, lower), upper);

         setSize(getA(), getB(), startSizeA + delta, startSizeB - delta);
         Object.values(editors).forEach(function (ed) { ed.layout(); });
      }

      function onUp() {
         document.querySelector('#preview-frame').style.pointerEvents = '';
         resizerEl.classList.remove('is-dragging');
         document.removeEventListener('mousemove', onMove);
         document.removeEventListener('mouseup', onUp);
      }

      function handleResizerMousedown(e) {
         e.preventDefault();
         resizerEl.classList.add('is-dragging');
         startPos   = isVerticalFn() ? e.clientY : e.clientX;
         startSizeA = isVerticalFn() ? getA().offsetHeight : getA().offsetWidth;
         startSizeB = isVerticalFn() ? getB().offsetHeight : getB().offsetWidth;

         document.querySelector('#preview-frame').style.pointerEvents = 'none';

         document.addEventListener('mousemove', onMove);
         document.addEventListener('mouseup', onUp);
      }

      resizerEl.addEventListener('mousedown', handleResizerMousedown);
   }

   /**
    * Initialiseert alle resizers met de Monaco-editors voor herberekening na slepen.
    *
    * @param {Object} editorInstances - Object met html, css en js Monaco-editor instanties
    */
   function init(editorInstances) {
      editors = editorInstances;

      initResizer(
         mainResizer,
         function () { return document.querySelector('#editors-panel'); },
         function () { return document.querySelector('#preview-panel'); },
         null,
         function (a, b, sA) {
            const isVert = mainResizerIsVertical();
            const total  = isVert ? a.parentElement.offsetHeight : a.parentElement.offsetWidth;
            const pct    = (sA / total) * 100;
            a.style.flex = `0 0 ${pct}%`;
            b.style.flex = '1 1 0';
         },
         mainResizerIsVertical
      );

      initResizer(
         document.querySelector('#console-resizer'),
         function () { return document.querySelector('#preview-frame'); },
         function () { return document.querySelector('#console-panel'); },
         null,
         function (a, b, sA, sB) {
            b.style.flex = `0 0 ${sB}px`;
         },
         function () { return true; },
         60,
         30
      );

      editorResizers.forEach(function (res, i) {
         initResizer(
            res,
            function () { return panes[i]; },
            function () { return panes[i + 1]; },
            null,
            function (a, b, sA) {
               const parent = a.parentElement;
               const isVert = workspace.classList.contains('layout-vertical');
               const total  = isVert ? parent.offsetHeight : parent.offsetWidth;
               const pct    = (sA / total) * 100;
               a.style.flex = `0 0 ${pct}%`;
               b.style.flex = '1 1 0';
            },
            function () { return workspace.classList.contains('layout-vertical'); }
         );
      });
   }


   // return facade
   return {
      init,
   };

})();
