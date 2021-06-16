{
    const create_array = (size) => {
        $('#main_con').empty();
        let arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(Math.floor((Math.random() * 100) + 1))
        }
        for (let i = 0; i < size; i++) {
            var bar = $("<div></div>").addClass("bar");
            bar.width(Math.floor(800/size));
            bar.height(arr[i] * 5);
            $("#main_con").append(bar);
        }
    }

    async function swap(el1, el2) {

        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);


        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");


        el1.style.height = transform2;
        el2.style.height = transform1;
        
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    const bubbleSort = async () => {
        var arr = [...document.getElementById('main_con').children];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                arr[j].style.background = "red";
                arr[j + 1].style.background = "red";

                if (arr[j].offsetHeight > arr[j + 1].offsetHeight) {
                    swap(arr[j], arr[j + 1]);
                    await sleep(100);
                }
                arr[j].style.background = "coral";
                arr[j + 1].style.background = "coral";
            }

        }
    }

    const insertion_sort = async () => {
        var arr = [...document.getElementById('main_con').children];

        for (let i = 1; i < arr.length; i++) {
            let j = i - 1;
            while (j >= 0 && arr[j].offsetHeight > arr[j + 1].offsetHeight) {
                arr[j].style.background = "red";
                arr[j + 1].style.background = "red";

                swap(arr[j], arr[j + 1]);
                await sleep(70);

                arr[j].style.background = "coral";
                arr[j + 1].style.background = "coral";

                j--;
            }
        }
    }

    const selection_sort = async () =>{
        var arr = [...document.getElementById('main_con').children];

        for(let i = 0 ;i < arr.length -1;i++){
            let min_idx = i;
            arr[min_idx].style.background = "black";
            for(let j=i+1;j<arr.length;j++){
                arr[j].style.background = "purple";
                await sleep(200);
                if(arr[j].offsetHeight <= arr[min_idx].offsetHeight)
                {
                    arr[min_idx].style.background = "coral";
                    await sleep(200);

                    min_idx = j;
                    arr[min_idx].style.background = "black";
                    await sleep(200);
                }else{
                arr[j].style.background = "coral";
               }
            }
            arr[i].style.background = "yellow";
            //arr[min_idx].style.background = "green";
            await sleep(500);
            await swap(arr[i],arr[min_idx]);
            arr[i].style.background = "coral";
            arr[min_idx].style.background = "coral";

        }
    }

    //MERGER SORT----------------------------//
    const merge_sort = async () => {
        let arr = [...document.getElementById('main_con').children];
        for (let k = 0; k < arr.length; k++) {
            console.log(arr[k].offsetHeight + " ");
        }
        await merger_sort_helper(arr, 0, arr.length - 1);
    }
    const merger_sort_helper = async (arr, st, e) => {

        if (st >= e) { return; }

        //console.log(st +" " + e);
        let mid = Math.floor((st + e) / 2);
        // console.log(mid);


        for (let k = st; k <= mid; k++) {
            arr[k].style.background = "blue";
        }
        await sleep(500);

        for (let k = st; k <= mid; k++) {
            arr[k].style.background = "coral";
        }
        
        await merger_sort_helper(arr, st, mid);

        
        

        for (let k = mid + 1; k <= e; k++) {
            await sleep(200);
            arr[k].style.background = "blue";
        }
        await sleep(500);
        
        for (let k = mid + 1; k <= e; k++) {
            arr[k].style.background = "coral";
        }


        await merger_sort_helper(arr, mid + 1, e);

        



        console.log(`merged ${st} to ${e} having ${mid}`);

        await sleep(200);

        await merge(arr, st, mid, mid + 1, e);

        await sleep(200);


    }

    function mergeem(left, right) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }

        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [...arr, ...left, ...right]
    }

    const merge = async (arr, st1, e1, st2, e2) => {
        let new_arr = [];
        let L = [];
        let R = [];
        let i = 0;
        for (let k = st1; k <= e1; k++) {
            arr[k].style.background = "green";
            L.push(arr[k].offsetHeight);
        }
        for (let k = st2; k <= e2; k++) {
            R.push(arr[k].offsetHeight);
            arr[k].style.background = "yellow";
        }
        await sleep(1000);
        for (let k = st1; k <= e1; k++) {
            arr[k].style.background = "coral";
        }
        
        for (let k = st2; k <= e2; k++) {
            arr[k].style.background = "coral";
        }
        new_arr = mergeem(L, R);

        // if(e1 === 1 &&  e2===3){
        //     console.log("--------");
        //     for(let i=0;i<=3;i++){
        //         console.log(arr[i].offsetHeight);
        //     }
        //     console.log("--------");
        // }
        // console.log(new_arr);
        for (let k = st1; k <= e2; k++) {
            arr[k].style.height = `${new_arr[i]}px`;
            await sleep(100);
            i++;
        }
        //return arr;
    }

    //MERGER SORT---------------------------- END//


    $('#new_ar_btn').click(() => {
        create_array(10);
    })

    $('#bubble_sort').click(() => {
        bubbleSort();
    })

    $('#insertion_sort').click(() => {
        insertion_sort();
    })
    $('#merge_sort').click(() => {
        merge_sort();
    })
    $('#selection_sort').click(()=>{
        selection_sort();
    });


    create_array(10);
}
